const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const tripController = require('../controllers/tripController');

module.exports = (app) => {
  app.use(homeController);
  app.use(authController);
  app.use(tripController);

  app.all('*', (req, res) => {
    res.render('404', { title: 'Page Not Found' });
  })
}