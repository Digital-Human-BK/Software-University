const router = require('express').Router();

const { isUser } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { getAll, getPubsByUser, getShares } = require('../services/publicationService');


router.get('/', async (req, res) => {
  const data = await getAll();
  res.render('home', { title: 'Home Page', data });
});

router.get('/gallery', async (req, res) => {
  const data = await getAll();
  res.render('gallery', { title: 'Gallery Page', data });
});

router.get('/gallery/:id', preload(true), (req, res) => {
  const pub = res.locals.publication;

  if (req.session.user) {
    pub.hasUser = true;
    pub.isOwner = req.session.user?._id == pub.owner._id;

    if (pub.users.some(user => user._id == req.session.user._id)) {
      pub.isShared = true;
    }
  }
  res.render('details', { title: pub.title });
});

router.get('/profile', isUser(), async (req, res) => {

  const [pubs, shared] = await Promise.all([
    getPubsByUser(res.locals.user._id),
    getShares(res.locals.user._id)
  ]);

  res.locals.isAuthor = pubs.map(p => p.title).join(', ');
  res.locals.hasShared = shared.map(s => s.title).join(', ');

  res.render('profile', {title: 'My profile'})
});

module.exports = router;