const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^https?:\/\/(.+)/;

const publicationSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Field "Title" is required'],
    minlength: [6, 'Title should be minimum of 6 characters long']
  },
  technique: {
    type: String,
    required: [true, 'Field  "Painting technique" is required'],
    maxlength: [15, 'Painting technique should be less than 15 characters long']
  },
  img: {
    type: String,
    required: [true, 'Field "Art picture" is required'],
    validate: {
      validator(value){
        return URL_PATTERN.test(value);
      },
      message: 'Invalid "Art picture" URL'
    }
  },
  certificate: {
    type: String,
    required: [true, 'Field "Certificate" is required'],
    enum: {
      values: ['Yes', 'No', 'yes', 'no', 'YES', 'NO'],
      message: 'Certificate value not supported'
    }
  },
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  users: {
    type: [ObjectId],
    ref: 'User',
    default: []
  }
});

const Publication = model('Publication', publicationSchema);

module.exports = Publication;