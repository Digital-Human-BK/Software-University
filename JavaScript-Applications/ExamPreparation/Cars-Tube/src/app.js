import { logout } from './api/data.js';
import {page, render} from './lib.js';
import { getUserData, removeUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createListingPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { mycarsPage } from './views/mycars.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';


const root = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createListingPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/mycars', mycarsPage);
page('/search', searchPage);

updateNav();
page.start();

function decorateContext(ctx, next){
  ctx.render = (content) => render(content, root);
  ctx.updateNav = updateNav;
  next();
}

function updateNav(){
  const userData = getUserData();

  if(userData){
    document.querySelector('#profile a').textContent = `Welcome ${userData.username}`;
    document.getElementById('profile').style.display = 'block';
    document.getElementById('guest').style.display = 'none';
  } else {
    document.getElementById('profile').style.display = 'none';
    document.getElementById('guest').style.display = 'block';
  }
}

async function onLogout(){
  await logout();
  removeUserData();
  updateNav();
  page.redirect('/')
}
