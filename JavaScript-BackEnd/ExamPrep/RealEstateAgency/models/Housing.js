const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^https?:\/\/(.+)/;

const housingSchema = new Schema({
  name: {
    type: String,
    minlength: [6, 'Name must be at least 6 characters long'],
    required: [true, 'Name must be at least 6 characters long']
  },
  type: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
    min: [1850, 'Minimum year 1850'],
    max: [2021, 'Max year 2021']
  },
  city: {
    type: String,
    required: true,
    minlength: [4, 'City must be at least 4 characters long']
  },
  img: {
    type: String,
    required: true,
    validate: {
      validator(value){
        return URL_PATTERN.test(value)
      },
      message: 'Listing image must be a valid URL'
    }
  },
  description: {
    type: String,
    required: true,
    maxlength: [60, 'Description can be up to 60 characters long']
  },
  pieces: {
    type: Number,
    required: true,
    min: [0, 'Minimum value 0'],
    max: [10, 'Max value 10']
  },
  tenants: {
    type: [ObjectId],
    default: [],
    ref: 'User'
  },
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
});

const Housing = model('Housing', housingSchema);

module.exports = Housing;