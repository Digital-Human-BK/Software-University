const { isUser, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { createPub, updatePub, deletePub, sharePub } = require('../services/publicationService');
const mapErrors = require('../util/mappers');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
  res.render('create', { title: 'Create New Publication', data: {} });
});

router.post('/create', isUser(), async (req, res) => {
  const pub = {
    title: req.body.title.trim(),
    technique: req.body.technique.trim(),
    img: req.body.img.trim(),
    certificate: req.body.certificate.trim(),
    owner: req.session.user._id
  }

  try {
    await createPub(pub);

    res.redirect('/gallery')
  } catch (err) {
    const errors = mapErrors(err);
    res.render('create', { title: 'Create New Punlication', data: pub, errors });
  }
});

router.get('/edit/:id', preload(false), isOwner(), (req, res) => {
  res.render('edit', { title: `Edit | ${res.locals.publication.title}` });
});

router.post('/edit/:id', preload(false), isOwner(), async (req, res) => {

  const id = req.params.id;

  const data = {
    title: req.body.title.trim(),
    technique: req.body.technique.trim(),
    img: req.body.img.trim(),
    certificate: req.body.certificate.trim()
  };

  try {
    await updatePub(id, data);
    res.redirect('/gallery/' + id);
  } catch (err) {
    const errors = mapErrors(err);
    data._id = id;
    res.render('edit', { title: `Edit | ${res.locals.publication.title}`, data, errors });
  }
});

router.get('/delete/:id', preload(false), isOwner(), async (req, res) => {
  await deletePub(req.params.id);
  res.redirect('/gallery');
});

router.get('/share/:id', isUser(), async (req, res) => {
  const id = req.params.id;
  const userId = req.session.user._id;

  try {
    await sharePub(id, userId);
  } catch (err) {
    console.error(err);
  } finally {
    res.redirect('/gallery/' + id);
  }
})

module.exports = router;