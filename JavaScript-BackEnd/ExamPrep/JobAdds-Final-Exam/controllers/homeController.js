const router = require('express').Router();

const preload = require('../middleware/preload');
const { isUser } = require('../middleware/guards');
const { getFirstThree, getAllAds, searchAds } = require('../services/adService');

router.get('/', async (req, res) => {
  const ads = await getFirstThree();
  res.render('home', { title: 'Home Page', ads });
});

router.get('/catalog', async (req, res) => {
  const ads = await getAllAds();
  res.render('catalog', { title: 'Catalog Page', ads });
});

router.get('/catalog/:id', preload(true), (req, res) => {
  const ad = res.locals.ad;

  if (req.session.user) {
    ad.hasUser = true;
    ad.isOwner = req.session.user._id == ad.owner._id;

    if (ad.candidates.some(user => user._id == req.session.user._id)) {
      ad.hasApplied = true;
    }
  }

  res.render('details', { title: ad.headline });
});

router.get('/search', isUser(), async (req, res) => {
  const results = await searchAds(req.query.search);
  
  res.render('search', { title: 'Search Ads', results, query: req.query.search });
})

module.exports = router;