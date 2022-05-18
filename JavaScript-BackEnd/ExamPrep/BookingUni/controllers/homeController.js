const router = require('express').Router();

const { isUser } = require('../middleware/guards');
const { getAll, getUserBookings } = require('../services/hotelService');
const preload = require('../middleware/preload');


router.get('/', async (req, res) => {
  const hotelAds = await getAll();
  res.render('home', { title: 'Home Page', hotelAds });
});

router.get('/details/:id', isUser(), preload(false), (req, res) => {
  const hotel = res.locals.hotel;

  hotel.isOwner = hotel.owner._id == req.session.user?._id;

  if (hotel.users.some(user => user._id == req.session.user._id)) {
    hotel.hasBooked = true;
  }

  res.render('details', { title: hotel.name });
});

router.get('/profile', isUser(), async (req, res) => {
  const bookings = await getUserBookings(res.locals.user._id);
  res.render('profile', {title: `${res.locals.user.username}\'s profile`, bookings})
})

module.exports = router;