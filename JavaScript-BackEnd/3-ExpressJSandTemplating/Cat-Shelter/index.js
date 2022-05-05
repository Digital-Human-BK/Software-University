const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const catsController = require('./controllers/catsController.js');
const requestLogger = require('./middlewares/requestLogger.js');

const port = process.env.port || 5000;
const server = express();


server.engine('.hbs', handlebars.engine({
  extname: '.hbs'
}));
server.set('view engine', '.hbs');

server.use(express.static('./public'));


// server.use(requestLogger); //app level middleware
// server.use('/cats', requestLogger); //route level middleware
server.use('/cats', requestLogger, catsController); //controller level middleware

server.get('/', (req, res) => {
  //custom HTML Response
  // let absolutePath = path.join(__dirname, '/views/home/index.html')

  // res.sendFile(absolutePath);
  res.render('home'); //add {layout : false} to prevent layout hbs structure
});

server.get('/add-cat/:catName?', (req, res) => {
  // res.header({
  //   'Content-type': 'text/html'
  // });
  // res.write('Add new cat!');
  // res.end();

  const dbBreeds = [
    'Persian',
    'Angora',
    'Bengal',
    'Ulichna Prevyzhodna'
  ]
  res.render('addCat', {
    name: req.params.catName,
    breeds: dbBreeds
  });
});

server.get('/add-breed', (req, res) => {
  res.render('addBreed');
});

// server.get('/addBreed', (req, res) => {
//   res.header({
//     'Content-type': 'text/html'
//   });
//   res.write('Create new breed here');
//   res.end();
// });

// server.get('/add*', (req, res) => {
//   res.header({
//     'Content-type': 'text/html'
//   });
//   res.write('Add detected');
//   res.end();
// });

// server.get(/.*cat.*/i, (req, res) => {
//   res.header({
//     'Content-type': 'text/html'
//   });
//   res.write('Cat detected');
//   res.end();
// });

// server.get('/download', (req, res) => {
//   res.download('./images/error.png')
// });

// server.get('/send', (req, res) => {
//   res.sendFile('/images/error.png', {
//     root: __dirname
//   })
// });

server.listen(port, () => console.log(`Server running on port ${port}`));