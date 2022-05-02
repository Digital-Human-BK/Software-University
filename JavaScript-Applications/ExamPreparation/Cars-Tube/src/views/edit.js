import { editCar, getCar } from '../api/data.js';
import { html } from '../lib.js';
import { createCarObject, validateInputData } from '../util.js';

const editTemplate = (car, onSubmit) => html`
<section id="edit-listing">
  <div class="container">

    <form @submit=${onSubmit} id="edit-form">
      <h1>Edit Car Listing</h1>
      <p>Please fill in this form to edit an listing.</p>
      <hr>

      <p>Car Brand</p>
      <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

      <p>Car Model</p>
      <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

      <p>Description</p>
      <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

      <p>Car Year</p>
      <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

      <p>Car Image</p>
      <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

      <p>Car Price</p>
      <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

      <hr>
      <input type="submit" class="registerbtn" value="Edit Listing">
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  const car = await getCar(ctx.params.id);

  ctx.render(editTemplate(car, onSubmit));

  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const carData = createCarObject(formData);

    if (validateInputData(carData)) {
      return alert('All fields required!');
    }

    if (carData.year <= 0 || carData.price <= 0) {
      return alert('-Year- and -Price- must be greather than 0!');
    }

    await editCar(car._id, carData);
    ctx.page.redirect('/details/' + car._id);
  }
}