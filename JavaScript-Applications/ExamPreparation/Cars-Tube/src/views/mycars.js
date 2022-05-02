import { getMyCars } from '../api/data.js';
import { html } from '../lib.js';
import { carPreview, getUserData } from '../util.js';

const mycarsTemplate = (cars) => html`
<section id="my-listings">
  <h1>My car listings</h1>
  <div class="listings">

    ${cars.length > 0
    ? cars.map(carPreview)
    : html`<p class="no-cars"> You haven't listed any cars yet.</p>`}

  </div>
</section>`;

export async function mycarsPage(ctx) {
  const userData = getUserData();
  const myCars = await getMyCars(userData.id);

  ctx.render(mycarsTemplate(myCars));
}