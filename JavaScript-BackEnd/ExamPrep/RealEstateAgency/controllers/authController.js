const router = require('express').Router();

const { isGuest, isUser } = require('../middleware/guards');
const { register, login } = require('../services/userService');
const mapErrors = require('../util/mappers');

router.get('/register', isGuest(), (req, res) => {
  res.render('register', { title: 'Register Page' });
});

router.post('/register', isGuest(), async (req, res) => {
  try {
    if (req.body.password.trim().length < 4) {
      throw new Error('Password must be at least 4 characters long');
    }
    if (req.body.password != req.body.repass) {
      throw new Error('Passwords don\'t match');
    }

    const user = await register(req.body.name, req.body.username, req.body.password);
    req.session.user = user;

    res.redirect('/');
  } catch (err) {
    console.error(err.message);
    const errors = mapErrors(err);
    res.render('register', {
      title: 'Register Page',
      name: req.body.name,
      username: req.body.username,
      errors
    });
  }
});

router.get('/login', isGuest(), (req, res) => {
  res.render('login', { title: 'Login Page' });
});

router.post('/login', isGuest(), async (req, res) => {
  try {
    const user = await login(req.body.username, req.body.password);
    req.session.user = user;
    res.redirect('/');
  } catch (err) {
    console.log(err.message);
    const errors = mapErrors(err);
    res.render('login', { title: 'Login Page', errors });
  }
});

router.get('/logout', isUser(), (req, res) => {
  delete req.session.user;
  res.redirect('/');
})


module.exports = router;