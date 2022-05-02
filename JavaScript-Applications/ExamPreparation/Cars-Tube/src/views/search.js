import { getSearchResult } from '../api/data.js';
import { html } from '../lib.js';
import { carPreview } from '../util.js';

const searchTemplate = (onClick, cars, params = '') => html`
<section id="search-cars">
  <h1>Filter by year</h1>

  <div class="container">
    <input id="search-input" type="text" name="search" .value=${params}>
    <button @click=${onClick} class="button-list">Search</button>
  </div>
  <h2>Results:</h2>
  <div class="listings">

    ${cars.length > 0
    ? cars.map(carPreview)
    : html`<p class="no-cars"> No results.</p>`}

  </div>
</section>`;

export async function searchPage(ctx) {
  const params = ctx.querystring.split('=')[1];
  let cars = [];

  if(params) {
    cars = await getSearchResult(params);
  }

  ctx.render(searchTemplate(onClick, cars, params));

  const input = document.getElementById('search-input');

  function onClick() {
    const search = Number(input.value.trim());
    if (search > 1900 && search < 2025) {
      ctx.page.redirect('/search?query=' + encodeURIComponent(search));
    }
  }
}