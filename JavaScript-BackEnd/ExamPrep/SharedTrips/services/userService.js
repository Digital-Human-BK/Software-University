const User = require('../models/User');
const { hash, compare } = require('bcrypt');


async function register(email, password, gender) {
  const existing = await getUserByUserEmail(email);

  if(existing){
    throw new Error('Email is taken')
  }

  const hashedPassword = await hash(password, 9);

  const user = new User({
    email,
    gender,
    hashedPassword
  });
  await user.save();

  return user;
}

async function login(email, password){
  const user = await getUserByUserEmail(email);

  if(!user) {
    console.log('User doesn\'t exist');
    throw new Error('Incorrect email or password!');
  }

  const hasMatch = await compare(password, user.hashedPassword);
  if(!hasMatch){
    console.log('Passwords don\'t match');
    throw new Error('Incorrect email or password!');
  }

  return user;
}

async function getUserByUserEmail(email) {
  const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });
  return user;
}

module.exports = {
  login,
  register
}