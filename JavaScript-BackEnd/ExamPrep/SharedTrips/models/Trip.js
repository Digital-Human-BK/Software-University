const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^https?:\/\/(.+)/;

const tripSchema = new Schema({
  start: {
    type: String,
    required: true,
    minlength: [4, 'Starting point should be at least 4 characters long']
  },
  end: {
    type: String,
    required: true,
    minlength: [4, 'End point should be at least 4 characters long']
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  carImg: {
    type: String, required: true, validate: {
      validator(value) {
        return URL_PATTERN.test(value);
      },
      message: 'Car image must be a valid URL'
    }
  },
  carBrand: {
    type: String,
    required: true,
    minlength: [4, 'Car brand should be at least 4 characters long']
  },
  seats: {
    type: Number,
    required: true,
    min: [0, 'Seats minimum is 0'],
    max: [4, 'Seath maximum is 4']
  },
  price: {
    type: Number, required: true,
    min: [1, 'Price minimum is 1'],
    max: [50, 'Price maximum is 50']
  },
  description: {
    type: String,
    required: true,
    minlength: [10, 'Starting point must be at least 10 characters']
  },
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  buddies: {
    type: [ObjectId],
    ref: 'User',
    default: []
  },
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;