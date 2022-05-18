const router = require('express').Router();

const { isUser, isOwner } = require('../middleware/guards');
const { createHotel, updateHotel, deleteHotel, bookHotel } = require('../services/hotelService');
const preload = require('../middleware/preload');
const mapErrors = require('../util/mappers');


router.get('/create', isUser(), (req, res) => {
  res.render('create', { title: 'Create new listing', data: {} })
});

router.post('/create', isUser(), async (req, res) => {
  const hotel = {
    name: req.body.name.trim(),
    city: req.body.city.trim(),
    img: req.body.img.trim(),
    freeRooms: req.body.freeRooms.trim(),
    owner: req.session.user._id
  }

  try {
    await createHotel(hotel);
    res.redirect('/');
  } catch (err) {
    console.log(err.message);
    const errors = mapErrors(err);
    res.render('create', { title: 'Create New Listing', data: hotel, errors });
  }
});

router.get('/edit/:id', preload(false), isOwner(), (req, res) => {
  res.render('edit', { title: 'Edit Ad' })
});

router.post('/edit/:id', preload(false), isOwner(), async (req, res) => {

  const id = req.params.id;

  const hotel = {
    name: req.body.name.trim(),
    city: req.body.city.trim(),
    freeRooms: req.body.freeRooms.trim(),
    img: req.body.img.trim()
  }

  try {
    await updateHotel(id, hotel);
    res.redirect('/details/' + id);
  } catch (err) {
    console.log(err.message);
    const errors = mapErrors(err);
    hotel._id = id;
    res.render('edit', { title: 'Edit Ad', hotel, errors });
  }
});

router.get('/delete/:id', preload(false), isOwner(), async (req, res) => {
  await deleteHotel(req.params.id);
  res.redirect('/');
});

router.get('/book/:id', isUser(), async (req, res) => {
  const id = req.params.id;
  const userId = req.session.user._id;

  try {
    await bookHotel(id, userId);
  } catch (err) {
    console.log(err.message);
  } finally {
    res.redirect('/details/' + id);
  }
});

module.exports = router;