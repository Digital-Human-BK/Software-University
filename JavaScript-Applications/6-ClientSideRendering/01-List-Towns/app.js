import { html, render } from './node_modules/lit-html/lit-html.js';

const rootDiv = document.getElementById('root');
document.querySelector('form.content').addEventListener('submit', (ev) => {
  ev.preventDefault();
  const towns = document.getElementById('towns').value.split(',').map(t => t.trim());

  const result = listTemplate(towns);
  render(result, rootDiv);
});

const listTemplate = (towns) => html`
<ul>
  ${towns.map(t => html`<li>${t}</li>`)}
</ul>`;