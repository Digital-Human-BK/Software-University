import { html, render } from './node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';

const contactTemplate = (data) => html`
  <div class="contact card">
    <div>
      <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
      <h2>Name: ${data.name}</h2>
      <button class="detailsBtn">Details</button>
      <div class="details" id=${data.id}>
        <p>Phone number: ${data.phoneNumber}</p>
        <p>Email: ${data.email}</p>
      </div>
    </div>
  </div>`;

start();

function start() {
  const container = document.getElementById('contacts');

  container.addEventListener('click', onClick);

  onRender();

  function onRender() {
    render(contacts.map(contactTemplate), container);
  }
}

function onClick(ev) {
  if (ev.target.tagName == 'BUTTON') {
    const div = ev.target.parentElement.querySelector('.details');

    if (div.style.display == 'block') {
      div.style.display = 'none';
    } else {
      div.style.display = 'block';
    }
  }
}
