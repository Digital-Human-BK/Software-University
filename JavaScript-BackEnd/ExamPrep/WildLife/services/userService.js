const User = require('../models/User');
const { hash, compare } = require('bcrypt');


// TODO add all fields required
async function register(firstName, lastName, email, password) {
  const existing = await getUserByEmail(email);

  if (existing) {
    throw new Error('Username is taken')
  }

  const hashedPassword = await hash(password, 9);

  const user = new User({
    firstName,
    lastName,
    email,
    hashedPassword
  });
  await user.save();

  return user;
}

// TODO change identifier
async function login(email, password) {
  const user = await getUserByEmail(email);

  if (!user) {
    console.log('User doesn\'t exist');
    throw new Error('Incorrect email or password!');
  }

  const hasMatch = await compare(password, user.hashedPassword);
  if (!hasMatch) {
    console.log('Passwords don\'t match');
    throw new Error('Incorrect email or password!');
  }

  return user;
}

// TODO identify user by the given identifier
async function getUserByEmail(email) {
  const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });
  return user;
}

module.exports = {
  login,
  register
}