const { Schema, model } = require('mongoose');

const NAME_PATTERN = /^[A-Za-z]+ [A-Za-z]+$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator(value){
        return NAME_PATTERN.test(value);
      },
      message: 'Please provide valid First name and Last name'
    }
  },
  username: {
    type: String,
    required: true,
    minlength: 5
  },
  hashedPassword: {
    type: String,
    required: true
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

module.exports =  User;