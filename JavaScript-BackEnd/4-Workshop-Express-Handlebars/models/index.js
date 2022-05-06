const mongoose = require('mongoose');

require('./Car');
require('./Accessory');

const connectionString = 'mongodb://localhost:27017/carzone';

async function init() {

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false
    });
    console.log('Database connected');

    mongoose.connection.on('error', (err) => {
      console.error('Database error');
      console.error(err);
    })
  } catch (e) {
    console.error('Error connection to database!');
    process.exit(1);
  }
}

module.exports = init;