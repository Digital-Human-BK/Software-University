import { html, render } from './node_modules/lit-html/lit-html.js';
import { get, post } from './requests.js';

const template = (data) => html`${data.map(item => html`<option value=${item._id}>${item.text}</option>`)}`;

const input = document.getElementById('itemText');
document.querySelector('form').addEventListener('submit', addItem);

update();

async function addItem(ev) {
    ev.preventDefault();

    if (input.value.trim() != '') {
        await post(input.value);
        input.value = '';
        update();
    }
}

async function update() {
    const optionsData = await get();
    render(template(optionsData), document.getElementById('menu'));
}
