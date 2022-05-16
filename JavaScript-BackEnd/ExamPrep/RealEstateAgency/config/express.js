const express = require('express');
const session = require('express-session');
const hbs = require('express-handlebars');
const userSession = require('../middleware/userSession');

module.exports =  (app) => {
  app.engine('.hbs', hbs.create({
    extname: '.hbs'
  }).engine);
  app.set('view engine', '.hbs');
  
  app.use('/static', express.static('static'));

  app.use(session({
    secret: 'super duper',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: 'auto'}
  }));

  app.use(express.urlencoded({extended: true}));

  app.use(userSession());
};