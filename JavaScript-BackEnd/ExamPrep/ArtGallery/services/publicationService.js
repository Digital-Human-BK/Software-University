const Publication = require('../models/Publication');

async function getAll() {
  return Publication.find({}).lean();
}

async function getById(id) {
  return Publication.findById(id).lean();
}

async function getPubAndSubscribers(id) {
  return Publication.findById(id).populate('owner').populate('users').lean();
}

async function getPubsByUser(userId) {
  return Publication.find({ owner: userId }).lean();
}

async function getShares(userId) {
  return Publication.find({ users: { $eq: userId } }).lean();
}

async function createPub(data) {
  const pub = new Publication(data);
  await pub.save();
}

async function updatePub(id, data) {
  const existing = await Publication.findById(id);

  existing.title = data.title;
  existing.technique = data.technique;
  existing.img = data.img;
  existing.certificate = data.certificate;

  await existing.save();
}

async function deletePub(id) {
  await Publication.findByIdAndDelete(id);
}

async function sharePub(id, userId) {
  const pub = await Publication.findById(id);

  if (pub.users.includes(userId)) {
    throw new Error('You already shared this publication');
  }

  pub.users.push(userId)
  await pub.save();
}

module.exports = {
  getAll,
  getById,
  getPubAndSubscribers,
  getPubsByUser,
  getShares,
  createPub,
  updatePub,
  deletePub,
  sharePub
};