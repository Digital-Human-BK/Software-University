import { updateNav } from './app.js';
import { showView } from './dom.js';
import { showHome } from './home.js';

//initialization
// - find relevant section
// - detach section from dom

const section = document.getElementById('form-sign-up');

const form = section.querySelector('form');
form.addEventListener('submit', onRegister);

section.remove();

//display logic

export function showRegister() {
  showView(section);
}

async function onRegister(ev){
  ev.preventDefault();

  const formData = new FormData(form);

  const email = formData.get('email').trim();
  const password = formData.get('password').trim();
  const repass = formData.get('repeatPassword').trim();

  try {
    if (email == '') {
      throw new Error('Email required!');
    }
    if(password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }
    if(repass != password) {
      throw new Error('Repeat password does not match'); 
    }

    const res = await fetch('http://localhost:3030/users/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });

    if(res.ok == false) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();

    sessionStorage.setItem('userData', JSON.stringify({
      email: data.email,
      id: data._id,
      token: data.accessToken
    }));

    form.reset();
    updateNav();
    showHome();

  } catch (error) {
    alert(error.message);
  }
}

