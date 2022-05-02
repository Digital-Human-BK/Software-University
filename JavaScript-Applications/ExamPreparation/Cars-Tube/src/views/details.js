import { deleteCar, getCar } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailtTemplate = (car, onDelete, isOwner) => html`
<section id="listing-details">
  <h1>Details</h1>
  <div class="details-info">
    <img src=${car.imageUrl}>
    <hr>
    <ul class="listing-props">
      <li><span>Brand:</span>${car.brand}</li>
      <li><span>Model:</span>${car.model}</li>
      <li><span>Year:</span>${car.year}</li>
      <li><span>Price:</span>${car.price}$</li>
    </ul>

    <p class="description-para">${car.description}</p>
    ${isOwner
      ? controlButtons(car, onDelete)
      : null}    
  </div>
</section>`;

const controlButtons = (car, onDelete) => html`
<div class="listings-buttons">
  <a href="/edit/${car._id}" class="button-list">Edit</a>
  <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
</div>`;


export async function detailsPage(ctx) {
  const car = await getCar(ctx.params.id);
  const userData = getUserData();

  const isOwner = userData && userData.id == car._ownerId;
  ctx.render(detailtTemplate(car, onDelete, isOwner));

  async function onDelete() {
    if (confirm(`Are you sure you want to delete ${car.brand} ${car.model}?`)) {
      await deleteCar(car._id);
      ctx.page.redirect('/catalog');
    }
  }
}