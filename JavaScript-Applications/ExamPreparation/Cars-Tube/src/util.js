import { html } from './lib.js';

export function getUserData() {
  return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) {
  sessionStorage.setItem('userData', JSON.stringify(data));
}

export function removeUserData() {
  sessionStorage.removeItem('userData');
}

export function createCarObject(formData) {
  const carData = [...formData.entries()].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v.trim() }), {});
  carData.price = Number(carData.price);
  carData.year = Number(carData.year);
  return carData;
}

export function validateInputData(data) {
  return Object.values(data).some(v => v == '');
}

export function carPreview(car) {
  return html`
  <div class="listing">
    <div class="preview">
      <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
      <div class="data-info">
        <h3>Year: ${car.year}</h3>
        <h3>Price: ${car.price} $</h3>
      </div>
      <div class="data-buttons">
        <a href="/details/${car._id}" class="button-carDetails">Details</a>
      </div>
    </div>
  </div>`;
}