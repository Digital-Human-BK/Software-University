const { isUser } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { getTrips, getTripsByUser } = require('../services/tripService');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' })
});

router.get('/trips', async (req, res) => {
  const trips = await getTrips();
  res.render('catalog', { title: 'Shared Trips', trips });
});

router.get('/trips/:id', preload(true), (req, res) => {
  const trip = res.locals.trip;
  trip.remainingSeats = trip.seats - trip.buddies.length;
  trip.buddiesList = trip.buddies.map(b => b.email).join(', ');
  if (req.session.user) {
    trip.hasUser = true;
    trip.isOwner = req.session.user?._id == trip.owner._id;

    if (trip.buddies.some(b => b._id == req.session.user._id)) {
      trip.isJoined = true;
    }
  }
  res.render('details', { title: 'Trip Details' });
});

router.get('/profile', isUser(), async (req, res) => {
  const tripsByUser = await getTripsByUser(res.locals.user._id);
  res.locals.user.tripsCount = tripsByUser.length;
  res.locals.user.trips = tripsByUser;
  console.log(res.locals.user);
  res.render('profile', { title: 'My Trips' })
});

module.exports = router;