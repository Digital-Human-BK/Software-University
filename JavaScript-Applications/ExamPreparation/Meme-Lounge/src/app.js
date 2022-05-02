import { logout } from './api/data.js';
import {render, page} from './lib.js'
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { profilePage } from './views/profilePage.js';
import { registerPage } from './views/register.js';

let context;
const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/memes', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/myprofile', profilePage);

updateNav();
page.start();


function decorateContext(ctx, next){
  context = ctx;
  ctx.render = (content) => render(content, root);
  ctx.updateNav = updateNav;

  next();
}


function updateNav(){
  const user = getUserData()

  if(user){
    document.querySelector('.user').style.display = 'block';
    document.querySelector('.guest').style.display = 'none';
    document.querySelector('.user span').textContent = `Welcome, ${user.email}`;
  } else {
    document.querySelector('.user').style.display = 'none';
    document.querySelector('.guest').style.display = 'block';
  }
}

function onLogout(){
  logout();
  updateNav();
  context.page.redirect('/');
}