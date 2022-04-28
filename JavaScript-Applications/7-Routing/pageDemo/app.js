import page from "//unpkg.com/page/page.mjs"

const main = document.querySelector('main');

function homePage(ctx, next){
  main.innerHTML = `<h2>Home Page</h2><p>Welcome to tour site!</p>`;
}

function catalogPage(ctx, next){
  console.log(ctx);

  main.innerHTML = `<h2>Catalog</h2><p>List of items</p>`;
}

function checkoutPage(ctx, next){
  main.innerHTML = `<h2>Cart Details</h2><p>Products in cart</p>`;
}

function detailsPage(ctx, next){
  main.innerHTML = `<h2>Product</h2><p>Product details</p><button>Buy NOW!</b>`;
  document.querySelector('button').addEventListener('click', () => {
    page.redirect('/checkout')
  })
}

function aboutPage(){
  main.innerHTML = `<h2> About Us</h2><p> Contact:</p><p>number: +111-555-777</p>`;
}

page('/home', homePage);
page('/catalog', catalogPage);
page('/catalog/:id', detailsPage);
page('/checkout', checkoutPage);
page('/about', aboutPage);
page.redirect('/', '/home')
page.start();