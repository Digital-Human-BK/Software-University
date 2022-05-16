const mongoose = require('mongoose');

require('../models/User');
require('../models/Housing');

const dbName = 'realEstate';

const connectionString = `mongodb://localhost:27017/${dbName}`;
module.exports = async (app) => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected');

    mongoose.connection.on('error', (e) => {
      console.error('Database Error');
      console.error(e);
    })
  } catch (err) {
    console.error('Error while connection to database');
    process.exit(1)
  }
};