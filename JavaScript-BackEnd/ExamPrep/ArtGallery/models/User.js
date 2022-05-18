const { Schema, model, Types: { ObjectId } } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Field is required'],
    minlength: [4, 'Username must be at least 4 characters long']
  },
  address: {
    type: String,
    required: [true, 'Field is required'],
    maxlength: [20, 'Address must be less than 20 characters long']
  },
  hashedPassword: {
    type: String,
    required: true
  },
  myPublications: {
    type: [ObjectId],
    ref: 'Publication',
    default: []
  }
});

userSchema.index({ username: 1 }, {
  unique: true,
  collation: {
    locale: 'en',
    strength: 2
  }
});

const User = model('User', userSchema);

module.exports = User;