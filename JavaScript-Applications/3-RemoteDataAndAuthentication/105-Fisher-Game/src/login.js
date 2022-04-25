window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form[id=login]').addEventListener('submit', onLogin);
  //hide buttons that are not needed
  document.getElementById('user').style.display = 'none';
  document.getElementById('login').style.display = 'none';
});

async function onLogin(ev) {
  ev.preventDefault();
  const formData = new FormData(ev.target);

  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  try {
    const response = await fetch('http://localhost:3030/users/login', {
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