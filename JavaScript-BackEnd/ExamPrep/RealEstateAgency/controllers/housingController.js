const router = require('express').Router();

const { isUser, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { createListing, updateListing, deleteById, rent } = require('../services/housingService');
const mapErrors = require('../util/mappers');


router.get('/create', isUser(), (req, res) => {
  res.render('create', { title: 'Create new listing', listing: {} });
});

router.post('/create', isUser(), async (req, res) => {
  const listing = {
    name: req.body.name,
    type: req.body.type,
    year: req.body.year,
    city: req.body.city,
    img: req.body.img,
    description: req.body.description,
    pieces: req.body.pieces,
    owner: req.session.user._id
  }

  try {
    await createListing(listing);
    res.redirect('/catalog');

  } catch (err) {
    console.log(err);
    const errors = mapErrors(err);
    res.render('create', { title: 'Create new listing', errors, listing });
  }
});

router.get('/edit/:id', preload(false), isOwner(), (req, res) => {
  res.render('edit', { title: 'Edit listing' });
});

router.post('/edit/:id', preload(false), isOwner(), async (req, res) => {
  const id = req.params.id;

  const listing = {
    name: req.body.name,
    type: req.body.type,
    year: req.body.year,
    city: req.body.city,
    img: req.body.img,
    description: req.body.description,
    pieces: req.body.pieces,
  };

  try {
    await updateListing(id, listing);
    res.redirect('/catalog/' + id);
  } catch (err) {
    console.error(err.message);
    listing._id = id;
    const errors = mapErrors(err);
    res.render('edit', { title: 'Edit Listing', listing, errors })
  }
});

router.get('/delete/:id', preload(false), isOwner(), async (req, res) => {
  await deleteById(req.params.id);
  res.redirect('/catalog');
});

router.get('/rent/:id', isUser(), async (req, res) => {
  const id =req.params.id;
  const userId = req.session.user._id;

  try {
    await rent(id, userId);
  } catch (err) {
    console.error(err);
  } finally {
    res.redirect('/catalog/' + id);
  }
})

module.exports = router;