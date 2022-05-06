const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { mapError } = require('../services/util');

const router = Router();


router.get('/register', (req, res) => {
  res.render('register', { title: 'Register Page' });
});

router.post('/register',
  body('username').trim(),
  body('password').trim(),
  body('repeatPassword').trim(),
  body('username')
    .isLength({ min: 5 }).withMessage('Username must be a least 5 characters long')
    .isAlphanumeric().withMessage('Username must contain only letters and numbers'),
  body('password')
    .isLength({ min: 3 }).withMessage('Password must be at least 8 characters long')
    .isAlphanumeric().withMessage('Password must contain only letters and numbers'),
  body('repeatPassword')
    .custom((value, { req, location, path }) => value == req.body.password)
    .withMessage('Passwords don\'t match'),
  async (req, res) => {
    const { errors } = validationResult(req);

    try {
      if (errors.length > 0) {
        throw errors;
      }
      await req.auth.register(req.body.username, req.body.password);
      res.redirect('/');
    } catch (e) {
      console.log(e);
      res.locals.errors = mapError(e);
      res.render('register', { title: 'Register Page', data: { username: req.body.username } });
    }
  });

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login Page' });
});

router.post('/login', async (req, res) => {
  try {
    await req.auth.login(req.body.username, req.body.password);

    res.redirect('/');
  } catch (e) {
    console.log(e.message);
    // res.locals.errors = [{msg: e.message}];
    res.locals.errors = mapError(e);
    res.render('login', { title: 'Login Page'});
  }
});

router.get('/logout', (req, res) => {
  req.auth.logout();
  res.redirect('/');
})

module.exports = router;