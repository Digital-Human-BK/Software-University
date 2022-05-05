const { getProducts, createProduct, getProductById, updateProduct } = require('./data');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const products = await getProducts();
  res.locals = {
    title: 'Catalog',
    products
  };
  res.render('catalog');
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res) => {
  const product = {
    name: req.body.name,
    price: Number(req.body.price),
    promoted: req.body.promoted ? true : false
  }

  await createProduct(product);

  res.redirect('/catalog');
});

router.get('/edit/:id', async (req, res) => {
  const product = await getProductById(req.params.id);
  res.locals = {
    product
  }
  res.render('edit');
});

router.put('/edit/:id', async (req, res) => {
  const id = req.params.id;
  const product = {
    name: req.body.name,
    price: Number(req.body.price),
    promoted: req.body.promoted
  }
  console.log(id);
  console.log(product);

  await updateProduct(id, product);
  res.redirect('/catalog');
})

module.exports = router;