const { Schema, model, Types: { ObjectId } } = require('mongoose');

const adSchema = new Schema({
  headline: {
    type: String,
    required: [true, 'Headline is required'],
    minlength: [4, 'Headline must be at least 4 characters long']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    minlength: [8, 'Location must be at least 8 characters long']
  },
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
    minlength: [3, 'Company name must be at least 3 characters long']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [40, 'Description can be up to 40 characters long']
  },
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  candidates: {
    type: [ObjectId],
    ref: 'User',
    default: []
  }
});

const Ad = model('Ad', adSchema);

module.exports = Ad;