const Ad = require('../models/Ad');

async function getAllAds() {
  return Ad.find().lean();
}

async function getFirstThree() {
  return Ad.find().sort({ _id: 1 }).limit(3).lean();
}

async function getAdById(id) {
  return Ad.findById(id).lean()
}

async function getAdAndCandidates(id) {
  return Ad.findById(id).populate('owner', 'email').populate('candidates', 'email description').lean();
}

async function searchAds(query) {
  if(query){
    const allAds = await Ad.find().populate('owner', 'email').lean();
    const result = allAds.filter(ad => ad.owner.email.toLocaleLowerCase() == query.toLocaleLowerCase());
    return result;
  }
}

async function createAd(data) {
  const ad = new Ad(data);
  await ad.save();
}

async function updateAd(id, data) {
  const existing = await Ad.findById(id);

  existing.headline = data.headline;
  existing.location = data.location;
  existing.companyName = data.companyName;
  existing.description = data.description;

  await existing.save();
}

async function deleteAd(id) {
  await Ad.findByIdAndDelete(id);
}

async function applyForAd(id, userId) {
  const ad = await Ad.findById(id);

  if (ad.candidates.includes(userId)) {
    throw new Error('User already apllied');
  }

  ad.candidates.push(userId);
  await ad.save();
}

module.exports = {
  getAllAds,
  getFirstThree,
  getAdById,
  getAdAndCandidates,
  createAd,
  updateAd,
  deleteAd,
  applyForAd,
  searchAds
};