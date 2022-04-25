window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form[id=register]').addEventListener('submit', onRegister);
  //hide buttons that are not needed
  document.getElementById('register').style.display = 'none';
  document.getElementById('user').style.display = 'none';
});

async function onRegister(ev) {
  ev.preventDefault();

  const formData = new FormData(ev.target);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();
  const rePass = formData.get('rePass').trim();


  try {
    if (password !== rePass) {
      throw new Error('Password confirmation does not match!');
    }

    if (email == '') {
      throw new Error('Email is required!');
    }

    if (password == '') {
      throw new Error('Password is required');
    }

    const response = await fetch('http://localhost:3030/users/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok == false) {
      const err = await response.json();
      throw new Error(err.message);
    }

    const data = await response.json();

    const userData = {
      email: data.email,
      id: data._id,
      token: data.accessToken
    }

    sessionStorage.setItem('userData', JSON.stringify(userData));
    window.location = './index.html';

  } catch (error) {
    alert(error.message);
  }
}