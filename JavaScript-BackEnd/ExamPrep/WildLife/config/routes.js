const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const postController = require('../controllers/postController');
const errorController = require('../controllers/404');

module.exports = (app) => {
  app.use(homeController);
  app.use(authController);
  app.use(postController);
  app.use(errorController)
}