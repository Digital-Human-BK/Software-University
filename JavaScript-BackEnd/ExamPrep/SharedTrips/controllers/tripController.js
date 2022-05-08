const { isUser, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { createTrip, updateTrip, deleteById, joinTrip } = require('../services/tripService');
const mapErrors = require('../util/mappers');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
  res.render('create', { title: 'Create Trip Offer', data: {} })
});

router.post('/create', isUser(), async (req, res) => {
  const trip = {
    start: req.body.start,
    end: req.body.end,
    date: req.body.date,
    time: req.body.time,
    carImg: req.body.carImg,
    carBrand: req.body.carBrand,
    seats: Number(req.body.seats),
    price: Number(req.body.price),
    description: req.body.description,
    owner: req.session.user._id,
  }

  try {
    await createTrip(trip);
    res.redirect('/trips');

  } catch (err) {
    const errors = mapErrors(err);
    res.render('create', { title: 'Create Trip Offer', errors, data: trip })
  }
});

router.get('/edit/:id', preload(false), isOwner(), (req, res) => {
  console.log(res.locals.trip);
  res.render('edit', { title: 'Edit Trip Offer' });
});

router.post('/edit/:id', preload(), isOwner(), async (req, res) => {
  const id = req.params.id;

  const trip = {
    start: req.body.start,
    end: req.body.end,
    date: req.body.date,
    time: req.body.time,
    carImg: req.body.carImg,
    carBrand: req.body.carBrand,
    seats: Number(req.body.seats),
    price: Number(req.body.price),
    description: req.body.description,
  };
  try {
    await updateTrip(id, trip);
    res.redirect('/trips/' + id);
  } catch (err) {
    const errors = mapErrors(err);
    trip._id = id;
    res.render('edit', { title: 'Edit Trip Offer', trip, errors });
  }
});

router.get('/delete/:id', preload(false), isOwner(), async (req, res) => {
    await deleteById(req.params.id);
    res.redirect('/trips');    
});

router.get('/join/:id', isUser(), async (req, res) => {
  const id = req.params.id;
  const userId = req.session.user._id;

  try {
    await joinTrip(id, userId)
  } catch (err) {
    console.error(err);
  } finally {
    res.redirect('/trips/' + id)
  }
})

module.exports = router;