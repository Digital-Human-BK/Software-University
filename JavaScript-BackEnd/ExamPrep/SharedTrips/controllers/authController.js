const router = require('express').Router();
const { isGuest, isUser } = require('../middleware/guards');
const { register, login } = require('../services/userService');
const mapErrors = require('../util/mappers');


router.get('/register', isGuest(), (req, res) => {
  res.render('register');
});

router.post('/register', isGuest(), async (req, res) => {
  try {
    if(req.body.password.trim().length < 4){
      throw new Error('Password must be at least 4 characters long!');
    }
    if (req.body.password !== req.body.repass) {
      throw new Error('Passwords don\'t match!');
    }
    const user = await register(req.body.email, req.body.password, req.body.gender);
    req.session.user = user;

    res.redirect('/'); 
  } catch (e) {
    console.log(e.message);
    const errors = mapErrors(e);
    const isMale = req.body.gender == 'male';
    res.render('register', { data: { email: req.body.email, isMale }, errors });
  }
});

router.get('/login', isGuest(), (req, res) => {
  res.render('login');
});

router.post('/login', isGuest(), async (req, res) => {
  try {
    const user = await login(req.body.email, req.body.password);
    req.session.user = user;
    res.redirect('/');
  } catch (e) {
    console.error(e.message);
    const errors = mapErrors(e);
    res.render('login', { data: { email: req.body.email }, errors })
  }
});

router.get('/logout', isUser(), (req, res) => {
  delete req.session.user;
  res.redirect('/');
})

module.exports = router;