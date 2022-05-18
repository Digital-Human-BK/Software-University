const { Schema, model, Types: { ObjectId } } = require('mongoose');

const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator(value){
        return EMAIL_PATTERN.test(value);
      },
      message: 'Invalid email'
    }
  },
  hashedPassword: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [40, 'Description can be up to 40 characters long']
  },
  myAds: {
    type: [ObjectId],
    ref: 'Ad',
    default: []
  }
});

userSchema.index({ email: 1 }, {
  unique: true,
  collation: {
    locale: 'en',
    strength: 2
  }
});

const User = model('User', userSchema);

module.exports = User;