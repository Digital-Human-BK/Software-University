const mongoose = require('mongoose');
require('../models/User');

//TODO change dbName
const dbName = 'wildlife';

const connectionString = `mongodb://localhost:27017/${dbName}`;

module.exports = async (app) => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // autoIndex: false  // If set to false database wont create undex
    });
    console.log('Database connected');

    mongoose.connection.on('error', (e) => {
      console.error('Database error!');
      console.error(e);
    })
  } catch (e) {
    console.error('Error connection to database');
    process.exit(1);
  }
}