const User = require('../models/User');
const { hash, compare } = require('bcrypt');

async function register(username, address, password) {
  const existing = await getUserBy(username);

  if(existing){
    throw new Error('Username already exist');
  }

  const hashedPassword = await hash(password, 9);

  const user = new User({
    username,
    address,
    hashedPassword
  });
  await user.save();

  return user;
}
async function login(username, password){
  const user = await getUserBy(username);

  if(!user){
    console.log('User doesn\'t exist');
    throw new Error('Incorrect username or password');
  }

  const hasMatch = await compare(password, user.hashedPassword);
  if(!hasMatch){
    console.log('Passwords don\'t match');
    throw new Error('Incorrect username or password');
  }

  return user;
}

async function getUserBy(username) {
  return User.findOne({ username });
}

module.exports = {
  register,
  login
};