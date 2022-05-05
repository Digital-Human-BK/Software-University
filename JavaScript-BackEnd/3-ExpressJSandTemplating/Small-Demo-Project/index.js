const express = require('express');
const hbs = require('express-handlebars');

const homeController = require('./src/home');
const catalogRouter = require('./src/catalog');

const app = express();

app.engine('.hbs', hbs.create({
  extname: '.hbs'
}).engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('static'));

app.get('/', homeController);
app.use('/catalog', catalogRouter);

app.listen(3000, () => console.log('Server listen on port 3000'));