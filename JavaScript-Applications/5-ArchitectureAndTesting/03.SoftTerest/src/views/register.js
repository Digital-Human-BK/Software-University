import { register } from '../api/data.js';

const section = document.getElementById('registerPage');
section.remove();

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export async function showRegisterPage(ctxTarget) {
  ctx = ctxTarget
  ctx.showSection(section);
}

async function onSubmit(ev) {
  ev.preventDefault();

  const formData = new FormData(form);

  const email = formData.get('email').trim();
  const password = formData.get('password').trim();
  const repass = formData.get('repeatPassword').trim();

  if(email.length < 3){
    return alert('Email must be at least 3 characters long!');
  }

  if(password.length < 3){
    return alert('Password must be at least 3 characters long!');
  }

  if(password != repass){
    return alert('Passwords don\'t match!');
  }

  await register(email, password);
  ctx.goTo('home');
  ctx.updateNav();
}