import { getAll, getMyItems } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const catalogTemplate = (dataPromise, userpage, page) => html`
<div class="row space-top">
  <div class="col-md-12">
    ${userpage 
      ? html`
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>`
      : html`
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>`
    }    
  </div>
</div>

<div class="row space-top">
    ${ page > 1 ? html`<a class="page-index btn btn-info" href=${`?page=${page - 1}`}>&lt; Prev</a>` : null}
    <a class="page-index btn btn-info" href=${`?page=${page + 1}`}>Next &gt;</a>
</div>

<div class="row space-top">
  ${until(dataPromise, html`<h2>Loading Items &hellip;</h2>`)}
</div>`;


const itemTemplate = (item) => html`
<div class="col-md-4">
  <div class="card text-white bg-primary">
    <div class="card-body">
      <img src=${item.img} />
      <p>${item.description}</p>
      <footer>
        <p>Price: <span>${item.price} $</span></p>
      </footer>
      <div>
        <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
      </div>
    </div>
  </div>
</div>`;

export function catalogPage(ctx) {
  const page = Number(ctx.querystring.split('=')[1] || 1);
  
  const userpage = ctx.pathname == '/my-furniture';
  ctx.render(catalogTemplate(loadItems(userpage, page), userpage, page));
}

async function loadItems(userpage, page = 1){
  let items = [];
  if(userpage){
    items = await getMyItems(getUserData().id)
  } else {
    items = await getAll(page);
  }

  return items.map(itemTemplate);
}