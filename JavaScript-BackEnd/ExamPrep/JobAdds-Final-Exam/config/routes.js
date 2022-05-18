const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const adController = require('../controllers/adController');

module.exports = (app) => {
  app.use(authController);
  app.use(homeController);
  app.use(adController);

  app.all('*', (req, res) => {
    res.render('404', { title: 'Page not found' });
  })
};