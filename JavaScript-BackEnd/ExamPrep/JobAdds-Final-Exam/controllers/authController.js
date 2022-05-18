const router = require('express').Router();

const { isGuest, isUser } = require('../middleware/guards');
const { register, login } = require('../services/userService');
const mapErrors = require('../util/mappers');


router.get('/register', isGuest(), (req, res) => {
  res.render('register', { title: 'Register', data: {} });
});

router.post('/register', isGuest(), async (req, res) => {
  try {
    if (req.body.password.trim().length < 5) {
      throw new Error('Password must be at least 5 characters long');
    }
    if (req.body.password.trim() != req.body.repass.trim()) {
      throw new Error('Passwords don\'t match');
    }

    const user = await register(
      req.body.email.trim(),
      req.body.password.trim(),
      req.body.description.trim(),
    );

    req.session.user = user;
    res.redirect('/');

  } catch (err) {
    console.log(err.message);
    const errors = mapErrors(err);
    res.render('register', {
      title: 'Register',
      data: {
        description: req.body.description.trim(),
        email: req.body.email.trim()
      },
      errors
    });
  }
});

router.get('/login', isGuest(), (req, res) => {
  res.render('login', { title: 'Login', data: {} });
});

router.post('/login', isGuest(), async (req, res) => {
  try {
    const user = await login(req.body.email.trim(), req.body.password.trim());
    req.session.user = user;
    res.redirect('/');
  } catch (err) {
    console.log(err.message);
    const errors = mapErrors(err);
    res.render('login', { title: 'Login', data: { email: req.body.email.trim() }, errors })
  }
});

router.get('/logout', isUser(), (req, res) => {
  delete req.session.user;
  res.redirect('/');
});

module.exports = router;