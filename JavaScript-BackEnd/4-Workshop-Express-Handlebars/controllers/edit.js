module.exports = {
  async get(req, res) {
    const id = req.params.id;
    const car = await req.storage.getCarById(id);

    if (car.owner != req.session.user.id) {
      console.log('User is not owner');
      return res.redirect('/login');
    }

    if (car) {
      res.render('edit', {
        title: `Edit | ${car.name}`,
        car
      });
    } else {
      res.redirect('/404');
    }
  },
  async post(req, res) {
    const id = req.params.id;

    const car = {
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl || undefined,
      price: Number(req.body.price)
    }

    try {
      if (await req.storage.updateCarById(id, car, req.session.user.id)) {
        res.redirect('/');
      } else {
        res.redirect('/login');
      };

    } catch (e) {
      console.log(e.message);
      res.redirect('/404');
    }
  }
}