const Housing = require('../models/Housing');

async function getAll() {
  return Housing.find().lean();
}

async function getMostRecent() {
  return Housing.find().sort({ _id: -1 }).limit(3).lean();
}

async function getById(id) {
  return Housing.findById(id).lean();
}

async function getByUser(userId) {
  return Housing.find({ owner: userId }).lean();
}

async function getListingAndTenats(id) {
  return Housing.findById(id).populate('owner').populate('tenants').lean();
}

async function searchByType(query) {
  return Housing.find({ 'type': new RegExp(query, 'i') }).lean();
}

async function createListing(data) {
  const result = new Housing(data);
  await result.save();
}

async function updateListing(id, data) {

  const existing = await Housing.findById(id);

  existing.name = data.name;
  existing.type = data.type;
  existing.year = data.year;
  existing.city = data.city;
  existing.img = data.img;
  existing.description = data.description;
  existing.pieces = data.pieces;

  await existing.save();
}

async function deleteById(id) {
  await Housing.findByIdAndDelete(id);
}

async function rent(id, userId) {
  const listing = await Housing.findById(id);

  if (listing.tenants.includes(userId)) {
    throw new Error('You already rented this place');
  }

  listing.tenants.push(userId);
  await listing.save();
}



module.exports = {
  getAll,
  getById,
  getByUser,
  getMostRecent,
  getListingAndTenats,
  searchByType,
  createListing,
  updateListing,
  deleteById,
  rent
};