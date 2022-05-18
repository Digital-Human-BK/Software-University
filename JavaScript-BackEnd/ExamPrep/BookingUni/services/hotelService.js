const Hotel = require('../models/Hotel');

async function getAll() {
  return Hotel.find().sort({ freeRooms: 'desc' }).lean();
}

async function getById(id) {
  return Hotel.findById(id).lean();
}

async function getHotelAndUsers(id) {
  return Hotel.findById(id).populate('owner').populate('users').lean();
}

async function getUserBookings(userId) {
  return Hotel.find({ users: { $eq: userId } }).lean();
}

async function createHotel(data) {
  const hotel = new Hotel(data);
  await hotel.save();
}

async function updateHotel(id, data) {
  const existing = await Hotel.findById(id);

  existing.name = data.name;
  existing.city = data.city;
  existing.freeRooms = data.freeRooms;
  existing.img = data.img;

  await existing.save();
}

async function deleteHotel(id) {
  await Hotel.findByIdAndDelete(id);
}

async function bookHotel(id, userId) {
  const hotel = await Hotel.findById(id);

  if (hotel.users.includes(userId)) {
    throw new Error('User already have a booking at this hotel')
  }

  hotel.users.push(userId);
  hotel.freeRooms--;
  await hotel.save();
}
module.exports = {
  getAll,
  getById,
  getHotelAndUsers,
  getUserBookings,
  createHotel,
  updateHotel,
  deleteHotel,
  bookHotel
};