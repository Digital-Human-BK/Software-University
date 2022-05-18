const { Schema, model, Types: { ObjectId } } = require('mongoose');


const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Field is required']
  },
  email: {
    type: String,
    required: [true, 'Field is required']
  },
  hashedPassword: {
    type: String,
    required: true
  },
  bookedHotels: {
    type: [ObjectId],
    ref: 'Hotel',
    default: []
  },
  offeredHotels: {
    type: [ObjectId],
    ref: 'Hotel',
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