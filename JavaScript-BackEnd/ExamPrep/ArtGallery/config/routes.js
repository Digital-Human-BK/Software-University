const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const publicationController = require('../controllers/publicationController');

module.exports = (app) => {
  app.use(authController);
  app.use(homeController);
  app.use(publicationController);

  app.all('*', (req, res) => {
    res.render('404', { title: 'Page not found' });
  })
};