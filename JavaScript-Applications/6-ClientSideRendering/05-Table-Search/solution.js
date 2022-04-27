import { html, render } from './node_modules/lit-html/lit-html.js';

const searchInput = document.getElementById('searchField');
document.getElementById('searchBtn').addEventListener('click', onSearch);

const rowTemplate = (student) => html`
<tr>
   <td>${student.firstName} ${student.lastName}</td>
   <td>${student.email}</td>
   <td>${student.course}</td>
</tr>`;

let data;
getData();

function onSearch() {
   const searchText = searchInput.value.trim().toLocaleLowerCase();
   const rows = [...document.querySelectorAll('tbody tr')];

   rows.forEach(row => {
      if (searchText && row.textContent.toLocaleLowerCase().includes(searchText)) {
         row.className = 'select';
      } else {
         row.className = '';
      }
   });
   searchInput.value = '';
}


async function update() {
   render(data.map(rowTemplate), document.querySelector('tbody'));
}

async function getData() {
   const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
   data = Object.values(await res.json());

   update();
}