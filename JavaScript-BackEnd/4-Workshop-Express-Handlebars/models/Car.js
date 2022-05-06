const { Schema, model, Types: {ObjectId} } = require('mongoose');

const carSchema = new Schema({
  name: { type: String, required: [true, 'Name is required'], minlength: [2, 'Name must be at least 2 characters long'] },
  description: { type: String, default: '' },
  imageUrl: { type: String, minlength: 5, default: 'default.jpg', match: [/^https?:\/\//, 'Image URL must be a valid URL starting with http:// or https://'] },
  price: { type: Number, required: true, min: 0 },
  accessories: {type: [ObjectId], default: [], ref: 'Accessory'},
  isDeleted: {type: Boolean, default: false},
  owner: {type: ObjectId, ref: 'User'}
});

const Car = model('Car', carSchema);

module.exports = Car;