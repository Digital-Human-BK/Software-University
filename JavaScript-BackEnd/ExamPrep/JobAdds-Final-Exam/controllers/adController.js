const router = require('express').Router();

const { isUser, isOwner } = require('../middleware/guards');
const { createAd, updateAd, deleteAd, applyForAd } = require('../services/adService');
const preload = require('../middleware/preload');
const mapErrors = require('../util/mappers');

router.get('/create', isUser(), (req, res) => {
  res.render('create', { title: 'Create New Ad', data: {} });
});

router.post('/create', isUser(), async (req, res) => {
  const data = {
    headline: req.body.headline.trim(),
    location: req.body.location.trim(),
    companyName: req.body.companyName.trim(),
    description: req.body.description.trim(),
    owner: req.session.user._id
  }

  try {
    await createAd(data);
    res.redirect('/catalog');
  } catch (err) {
    console.log(err.message);
    const errors = mapErrors(err);
    res.render('create', { title: 'Create New Ad', data, errors })
  }
});


router.get('/edit/:id', preload(false), isOwner(), (req, res) => {
  res.render('edit', { title: 'Edit Post' });
});

router.post('/edit/:id', preload(false), isOwner(), async (req, res) => {
  const id = req.params.id;

  const newData = {
    headline: req.body.headline.trim(),
    location: req.body.location.trim(),
    companyName: req.body.companyName.trim(),
    description: req.body.description.trim(),
  };

  try {
    await updateAd(id, newData);
    res.redirect('/catalog/' + id);
  } catch (err) {
    console.log(err.message);
    newData._id = id;
    const errors = mapErrors(err);
    res.render('edit', { title: 'Edit Post', ad: newData, errors })
  }

});

router.get('/delete/:id', preload(false), isOwner(), async (req, res) => {
  await deleteAd(req.params.id);
  res.redirect('/catalog');
});

router.get('/apply/:id', isUser(), async (req, res) => {
  const id = req.params.id;
  const userId = req.session.user._id;

  try {
    await applyForAd(id, userId);
  } catch (err) {
    console.log(err);
  } finally {
    res.redirect('/catalog/' + id);
  }
});

module.exports = router;