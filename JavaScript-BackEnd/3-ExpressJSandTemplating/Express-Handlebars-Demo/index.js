const app = require('express')();
const handlebars = require('express-handlebars');

const hbs = handlebars.create({
  extname: '.hbs',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

let visitors = 0;

const cars = [
  { name: "NSX", price: 150000, promoted: true },
  { name: "S2000", price: 50000 },
  { name: "Civic", price: 35000 }
];

app.get('/', (req, res) => {
  res.locals = {
    count: visitors++,
    user: {
      username: 'Biser',
      email: 'biser@mail.com'
    }
  }
  res.render('home');
});

app.get('/catalog', (req, res) => {
  res.render('catalog', { cars });
})

app.listen(3000, () => console.log('Server running on port 3000'));