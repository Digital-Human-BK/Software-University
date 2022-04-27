import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns as townsList } from './towns.js';

const towns = townsList.map(t => ({ name: t, match: false }));

const townsTemplate = (towns) => html`
<ul>
   ${towns.map(t=> html`<li class=${t.match ? 'active' : ''}>${t.name}</li>`)}
</ul>`;

const townsDiv = document.getElementById('towns');
const input = document.getElementById('searchText');
const output = document.getElementById('result');
document.querySelector('button').addEventListener('click', search);

update()

function search() {
   const match = input.value.trim().toLocaleLowerCase();
   let matches = 0;
   for (const town of towns) {
      if(match && town.name.toLocaleLowerCase().includes(match)){
         town.match = true;
         matches++;
      } else {
         town.match = false;
      }
   }
   output.textContent = `${matches} matches found`;

   update();
}

function update() {
   render(townsTemplate(towns), townsDiv)
}
