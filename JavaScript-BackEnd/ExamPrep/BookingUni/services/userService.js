const User = require('../models/User');
const { hash, compare } = require('bcrypt');

async function register(username, email, password) {
  const existing = await getUserBy(email);

  if(existing){
    throw new Error('Username already exist');
  }

  const hashedPassword = await hash(password, 9);

  const user = new User({
    username,
    email,
    hashedPassword
  });

  await user.save();

  return user;
}
async function login(email, password){
  const user = await getUserBy(email);

  if(!user){
    console.log('User doesn\'t exist');
    throw new Error('Incorrect email or password');
  }

  const hasMatch = await compare(password, user.hashedPassword);
  if(!hasMatch){
    console.log('Passwords don\'t match');
    throw new Error('Incorrect email or password');
  }

  return user;
}

async function getUserBy(email) {
  return User.findOne({ email });
}

module.exports = {
  register,
  login
};