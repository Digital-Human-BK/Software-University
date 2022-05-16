const router = require('express').Router();

const { isUser } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { getAll, getMostRecent, searchByType } = require('../services/housingService');


router.get('/', async (req, res) => {
  const mostRecent = await getMostRecent();
  res.render('home', { title: 'Home Page', mostRecent });
});

router.get('/search', isUser(), async (req, res) => {
  console.log(req.query.search);
  const results = await searchByType(req.query.search);

  res.render('search', { title: 'Browse Offers', results, query: req.query.search });
});

router.get('/catalog', async (req, res) => {
  const listings = await getAll();
  res.render('catalog', { title: 'Listings', listings });
});

router.get('/catalog/:id', preload(true), (req, res) => {
  const listing = res.locals.listing;

  listing.remainingPlaces = listing.pieces - listing.tenants.length;
  listing.tenantsList = listing.tenants.map(t => t.name).join(', ');

  if (req.session.user) {
    listing.hasUser = true;
    listing.isOwner = req.session.user?._id == listing.owner._id;
  }

  if (listing.tenants.some(t => t._id == req.session.user?._id)) {
    listing.isRented = true;
  }
  res.render('details', { title: 'Listing Details' });
});

module.exports = router;