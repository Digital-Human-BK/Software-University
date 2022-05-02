import { logout } from './api/data.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { myBooksPage } from './views/mybooks.js';
import { registerPage } from './views/register.js';

const root = document.getElementById('site-content'); 
document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(decorateCotext);
page('/', dashboardPage)
page('/create', createPage)
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/mybooks', myBooksPage);

updateNav();
page.start();

function decorateCotext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.updateNav = updateNav;
  next();
}

function updateNav() {
  const userData = getUserData();

  if (userData != null) {
    document.getElementById('user').style.display = 'block';
    document.getElementById('guest').style.display = 'none';
    document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;
  } else {
    document.getElementById('user').style.display = 'none';
    document.getElementById('guest').style.display = 'block';
  }
}

async function onLogout() {
  await logout();
  updateNav();
  page.redirect('/');
}
