import { createCarListing } from '../api/data.js';
import { html } from '../lib.js';
import { createCarObject, validateInputData } from '../util.js';

const createTemplate = (onSubmit) => html`
<section id="create-listing">
  <div class="container">
    <form @submit=${onSubmit} id="create-form">
      <h1>Create Car Listing</h1>
      <p>Please fill in this form to create an listing.</p>
      <hr>

      <p>Car Brand</p>
      <input type="text" placeholder="Enter Car Brand" name="brand">

      <p>Car Model</p>
      <input type="text" placeholder="Enter Car Model" name="model">

      <p>Description</p>
      <input type="text" placeholder="Enter Description" name="description">

      <p>Car Year</p>
      <input type="number" placeholder="Enter Car Year" name="year">

      <p>Car Image</p>
      <input type="text" placeholder="Enter Car Image" name="imageUrl">

      <p>Car Price</p>
      <input type="number" placeholder="Enter Car Price" name="price">

      <hr>
      <input type="submit" class="registerbtn" value="Create Listing">
    </form>
  </div>
</section>`;

export async function createListingPage(ctx) {
  ctx.render(createTemplate(onSubmit));

  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const carData = createCarObject(formData);

    if (validateInputData(carData)) {
      return alert('All fieds required!')
    }

    if (carData.year <= 0 || carData.price <= 0) {
      return alert('-Year- and -Price- must be greather than 0!');
    }
    
    await createCarListing(carData);
    ctx.page.redirect('/catalog');
  }
}