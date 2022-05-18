const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^https?:\/\/(.+)/;

const hotelSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [4, 'Name should be at least 4 characters long']
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    minlength: [3, 'City name should be at least 3 characters long']
  },
  img: {
    type:String,
    required: [true, 'Image URL is required'],
    validate: {
      validator(value){
        return URL_PATTERN.test(value);
      },
      message: 'Invalid URL'
    }
  },
  freeRooms: {
    type: Number,
    min: [1, 'Min value 1'],
    max: [100, 'Max value 100']
  },
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  users: {
    type: [ObjectId],
    ref: 'User',
    default: []
  }
});

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;