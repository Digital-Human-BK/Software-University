const mongoose = require('mongoose');

require('../models/User');
require('../models/Publication');

const dbName = 'gallery'

const connectionString = `mongodb://localhost:27017/${dbName}`;

module.exports = async (app) => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected');

    mongoose.connection.on('error', (error) => {
      console.error('Database error');
      console.error(error);
    });
  } catch (err) {
    console.error('Error connection to database');
    process.exit(1);
  }
};