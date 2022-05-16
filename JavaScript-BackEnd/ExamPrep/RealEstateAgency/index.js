const express = require('express');
const expressCofig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');

start();

async function start() {
  const app = express();

  await databaseConfig(app);
  expressCofig(app);
  routesConfig(app);

  app.listen(3000, () => console.log('Server listen on port 3000'));
}
