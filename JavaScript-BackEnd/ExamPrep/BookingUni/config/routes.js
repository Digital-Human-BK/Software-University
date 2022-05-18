const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const hotelController = require('../controllers/hotelController');

module.exports = (app) => {
  app.use(authController);
  app.use(homeController);
  app.use(hotelController);

  app.all('*', (req, res) => {
    res.render('404', {title: '404 Page Not Found'});
  })
};