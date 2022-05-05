const { html } = require('../util');

const homePage = `
  <h1>My Home Page</h1>
  <p>Hello World!</p>`;

const aboutPage = `
  <h1>About Us</h1>
  <p>Contact Info</p>
  <p> + 555 111 2222 3333</p>`;

function homeController(req, res) {
  res.write(html(homePage, 'Home Page'));
  res.end();
}

function aboutController(req, res) {
  res.write(html(aboutPage, 'About Page'));
  res.end();
}

module.exports = {
  homeController,
  aboutController
}