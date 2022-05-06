module.exports = {
  async home(req, res) {
    const cars = await req.storage.getAll(req.query);
    console.log(cars);

    res.render('index', {
      title: 'Browse Models',
      cars,
      query: req.query
    });
  }
};