const User = require('../models/User');
const { hash, compare } = require('bcrypt');

async function register(name, username, password) {
  const existing = await getUserByUsername(username);

  if (existing) {
    throw new Error('Username is taken');
  }

  const hashedPassword = await hash(password, 9);

  const user = new User({
    name,
    username,
    hashedPassword
  });

  await user.save();

  return user;
}

async function login(username, password) {
  const user = await getUserByUsername(username);

  if (!user) {
    console.log('User doesn\'t exist');
    throw new Error('Incorrect username or password!');
  }

  const hasMatch = await compare(password, user.hashedPassword);
  if (!hasMatch) {
    console.log('Passwords don\'t match');
    throw new Error('Incorrect username or password!');
  }

  return user;
}

async function getUserByUsername(username) {
  return User.findOne({ username });
}

module.exports = {
  register,
  login
};