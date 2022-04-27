import { showHome } from './home.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';

//create modules for every view
//configue and test nav
//implement modules
// -create async func for requests
// -imlement DOM logic

const views = {
  'homeLink': showHome,
  'loginLink': showLogin,
  'registerLink': showRegister
};

const nav = document.querySelector('nav');

document.getElementById('logoutBtn').addEventListener('click', onLogout);

nav.addEventListener('click', (ev) => {
  const view = views[ev.target.id];
  if (typeof view == 'function') {
    ev.preventDefault();
    view();
  }
});


//srart app in home view
updateNav()
showHome();

export function updateNav() {
  const userData = JSON.parse(sessionStorage.getItem('userData'));

  if (userData != null) {
    nav.querySelector('#welcomeMessage').textContent = `Welcome, ${userData.email}`;

    [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'block');
    [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'none');
  } else {
    [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'none');
    [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'block');
  }
}

async function onLogout(ev) {
  ev.preventDefault();
  ev.stopImmediatePropagation();

  const { token } = JSON.parse(sessionStorage.getItem('userData'));

  await fetch('http://localhost:3030/users/logout', {
    method: 'get',
    headers: {
      'X-Authorization': token
    }
  });

  sessionStorage.removeItem('userData');
  updateNav();
  showLogin();
}

//Order of views:
// X home view(catalog)
// X log/reg
// X create
// X details
// X likes
// - edit
// - delete