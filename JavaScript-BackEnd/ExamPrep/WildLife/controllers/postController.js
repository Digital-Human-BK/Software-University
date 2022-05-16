const { isUser } = require('../middleware/guards');
const { createPost, getPostById, updatePost, deletePost, vote } = require('../services/postService');
const { mapErrors, postViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
  res.render('create', { title: 'Create new post' })
});

router.post('/create', isUser(), async (req, res) => {
  const userId = req.session.user._id;

  const post = {
    title: req.body.title,
    keyword: req.body.keyword,
    location: req.body.location,
    date: req.body.date,
    image: req.body.image,
    description: req.body.description,
    author: userId,
  };

  try {
    await createPost(post);
    res.redirect('/catalog');
  } catch (e) {
    // console.log(e);
    const errors = mapErrors(e);
    res.render('create', { title: 'Create new post', errors, data: post });
  }
});

router.get('/edit/:id', isUser(), async (req, res) => {
  const id = req.params.id;
  const post = postViewModel(await getPostById(id));

  if (req.session.user._id != post.author._id) {
    return res.redirect('/login');
  }

  res.render('edit', { title: 'Edit Post', post });
});

router.post('/edit/:id', isUser(), async (req, res) => {
  const id = req.params.id;
  const existing = postViewModel(await getPostById(id));

  if (req.session.user._id != existing.author._id) {
    return res.redirect('/login');
  }

  const post = {
    title: req.body.title,
    keyword: req.body.keyword,
    location: req.body.location,
    date: req.body.date,
    image: req.body.image,
    description: req.body.description
  };

  try {
    await updatePost(id, post);
    res.redirect('/catalog/' + id);
  } catch (e) {
    existing._id = id;
    console.error(e);
    const errors = mapErrors(e);
    res.render('edit', { title: 'Edit Post', post, errors })
  }
});

router.get('/delete/:id', isUser(), async (req, res) => {
  const id = req.params.id;
  const existing = postViewModel(await getPostById(id));

  if (req.session.user._id != existing.author._id) {
    return res.redirect('/login');
  }

  try {
    await deletePost(id);
    res.redirect('/catalog');
  } catch (e) {
    console.error(e);
    res.redirect('/catalog/' + id);
  }
});

router.get('/vote/:id/:type', isUser(), async (req, res) => {
  const id = req.params.id;
  const value = req.params.type == 'upvote' ? 1 : -1;

  try {
    await vote(id, req.session.user._id, value);
    res.redirect('/catalog/' + id);
  } catch (e) {
    console.error(e);
    const errors = mapErrors(e);
    res.render('details', {title: 'Post Details', errors});
  }
});

module.exports = router;