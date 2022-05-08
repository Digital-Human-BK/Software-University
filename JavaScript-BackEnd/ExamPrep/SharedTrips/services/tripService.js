const Trip = require('../models/Trip');

async function getTrips() {
  return Trip.find({}).lean();
}

async function getTripById(id) {
  return Trip.findById(id).lean();
}
async function getTripsByUser(userId) {
  return Trip.find({ owner: userId }).lean();
}

async function getTripAndUsers(id) {
  return Trip.findById(id).populate('owner').populate('buddies').lean();
}

async function createTrip(data) {
  const result = new Trip(data);
  await result.save();
}

async function updateTrip(id, trip) {
  const existing = await Trip.findById(id);
  existing.start = trip.start;
  existing.end = trip.end;
  existing.date = trip.date;
  existing.time = trip.time;
  existing.carImg = trip.carImg;
  existing.carBrand = trip.carBrand;
  existing.seats = Number(trip.seats);
  existing.price = Number(trip.price);
  existing.description = trip.description;

  await existing.save();
}

async function deleteById(id) {
  await Trip.findByIdAndDelete(id);
}

async function joinTrip(tripId, userId) {
  const trip = await Trip.findById(tripId);

  if (trip.buddies.includes(userId)) {
    throw new Error('You already joned this trip');
  }
  trip.buddies.push(userId);
  await trip.save();
}

module.exports = {
  getTrips,
  getTripById,
  getTripAndUsers,
  getTripsByUser,
  createTrip,
  updateTrip,
  deleteById,
  joinTrip
};