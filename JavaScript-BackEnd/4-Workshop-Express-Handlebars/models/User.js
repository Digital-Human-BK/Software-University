const { model, Schema } = require('mongoose');
const { hashPassword, comparePassword } = require('../services/util');

const userSchema = new Schema({
  username: { type: String, required: true, minlength: 3 },
  hashedPassword: { type: String, required: true }
});


//unique Index settings required 2 params
//first is the names of the fields we want to have the index on as keys, and the order as values (1asc, -1desc)
//second is the options
userSchema.index({ username: 1 }, {
  unique: true,
  collation: {
    //charset and variations of a letter
    locale: 'en',
    strength: 2
    //strenght 1: every variation counts as same
    //strenght 2: lower and upper case counts as the same, but variation are not
  }
});

userSchema.methods.comparePassword = async function (password) {
  return await comparePassword(password, this.hashedPassword);
};

userSchema.pre('save', async function (next) {

  if (this.isModified('hashedPassword')) {
    this.hashedPassword = await hashPassword(this.hashedPassword);
  }

  next();
})

const User = model('User', userSchema);

module.exports = User;