// TO DO LIST
// [x] init  and configue express app
// [x] init templating lib
// [x] create home controller 
// [x] bind routing  
// [x] create layout 

// --> create data service
// [x] read all
// [x] read one by Id
// [x] create
// [x] edit
// [x] delete
// [x] search
// v1.1
// [x] accessory read
// [x] accessory create
// [x] accessory attach
// v1.2
// [x] register user
// [x] login user
// [x] logout user
// [x] add authorization checks to data modification

// --> implrement controllers
// [x] home(catalog)
// [x] about
// [x] details
// [x] create
// [x] edit
// [x] delete
// [x] improved home (search)
// v1.1
// [x] create accessory
// [x] attach accessory to car
// [x] update details to include accessory
// v1.2
// [x] auth controler for login/register/logout
// [x] protect routes
// [x] only show edit buttons to record owner

// --> database
// [x] add database connection
// [x] create Car model
// [x] upgrade car service to use Car model
// [x] add validation rules to Car model
// v1.1
// [x] create Accessory model
// v1.2 
// [x] add session middleware nad auth lib
// [x] create user model
// [x] add owner property to Car, Accessory models

//imports
// -- third party modules
const express = require('express');
const hbs = require('express-handlebars');
const session = require('express-session');
const { body } = require('express-validator');


// -- local modules
const initDb = require('./models/index');

const carsService = require('./services/cars');
const accessoryService = require('./services/accessory');
const authService = require('./services/auth');
const { isLoggedIn } = require('./services/util');

// --- actions
const { home } = require('./controllers/home');
const { about } = require('./controllers/about');
const { details } = require('./controllers/details');
const create = require('./controllers/create');
const del = require('./controllers/delete');
const edit = require('./controllers/edit');
const accessory = require('./controllers/accessory');
const attachAccessory = require('./controllers/attachAccessory');
const authController = require('./controllers/auth');
const { notFound } = require('./controllers/notFound');

start();

//app config
async function start() {
  await initDb();

  const app = express();

  app.engine('.hbs', hbs.create({
    extname: '.hbs'
  }).engine);
  app.set('view engine', '.hbs');

  app.use(session({
    secret: 'super duper secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
  }));
  app.use(express.urlencoded({ extended: true }));
  app.use('/static', express.static('static'));


  // data service
  app.use(carsService());
  app.use(accessoryService());
  app.use(authService());

  //route controllers
  app.get('/', home);
  app.get('/about', about);
  app.get('/details/:id', details);

  app.route('/create')
    .get(isLoggedIn(), create.get)
    .post(isLoggedIn(), create.post);

  app.route('/delete/:id')
    .get(isLoggedIn(), del.get)
    .post(isLoggedIn(), del.post);

  app.route('/edit/:id')
    .get(isLoggedIn(), edit.get)
    .post(isLoggedIn(), edit.post);

  app.route('/accessory')
    .get(isLoggedIn(), accessory.get)
    .post(isLoggedIn(), accessory.post);

  app.route('/attach/:id')
    .get(isLoggedIn(), attachAccessory.get)
    .post(isLoggedIn(), attachAccessory.post);

  app.use(authController);

  app.all('*', notFound);

  app.listen(3000, () => console.log('Server listen on port 3000'));
}