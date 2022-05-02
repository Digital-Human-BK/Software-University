import { getAllCars } from '../api/data.js';
import { html } from '../lib.js';
import { carPreview } from '../util.js';

const catalogTemplate = (cars) => html`
<section id="car-listings">
  <h1>Car Listings</h1>
  <div class="listings">
    ${cars.length > 0
    ? cars.map(carPreview)
    : html`<p class="no-cars">No cars in database.</p>`}
  </div>
</section>`;

export async function catalogPage(ctx) {
  const cars = await getAllCars();

  ctx.render(catalogTemplate(cars));
}