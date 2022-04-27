import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const catCard = (cat) => html`
<li>
  <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
  <div class="info">
    <button @click=${() => toggleInfo(cat)} class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
    ${cat.info ? html`
    <div class="status" id=${cat.id}>
      <h4>Status Code: ${cat.statusCode}</h4>
      <p>${cat.statusMessage}</p>
    </div>` : null}
  </div>
</li>`;

const catsSection = document.getElementById('allCats');
cats.forEach(c => c.info = false);
update();

function update() {
  render(html`<ul>${cats.map(catCard)}</ul>`, catsSection);
}

function toggleInfo(cat) {
  cat.info = !cat.info;
  update();
}