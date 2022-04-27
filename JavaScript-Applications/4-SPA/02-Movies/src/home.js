import { showView, el } from './dom.js';
import { showCreate } from './create.js';
import { showDetails } from './details.js';

let moviesCache = null;
let lastLoaded = null;
const maxAge = 5000;

//initialization of home page
// - find relevant section
// - detach section from dom

const section = document.getElementById('home-page');
const catalog = document.querySelector('.card-deck.d-flex.justify-content-center');

section.querySelector('#createLink').addEventListener('click', (ev) => {
  ev.preventDefault();
  showCreate();
});

catalog.addEventListener('click', (ev) => {
  ev.preventDefault();
  let target = ev.target;

  if (target.tagName == 'BUTTON') {
    target = target.parentElement;
  }

  if (target.tagName == 'A') {
    const id = target.dataset.id;
    showDetails(id);
  }
});

section.remove();

//display logic

export function showHome() {
  showView(section);
  getMovies();
}

async function getMovies() {
  catalog.replaceChildren(el('h3', {}, 'Loading...'));

  const now = Date.now();
  if (moviesCache == null || (now - lastLoaded) > maxAge) {
    lastLoaded = now;

    const res = await fetch('http://localhost:3030/data/movies');
    const data = await res.json();
    moviesCache = data;
  }

  catalog.replaceChildren(...moviesCache.map(createMovieCard));
}

function createMovieCard(movie) {
  const details = el('a', { href: '#' }, //movie._id added on the next line
    el('button', { type: 'button', className: 'btn btn-info' }, 'Details')
  );
  details.dataset.id = movie._id;

  const element = el('div', { className: 'card mb-4' },
    el('img', { className: 'card-img-top', src: movie.img, alt: 'Card image cap', width: '400' }),
    el('div', { className: 'card-body' },
      el('h4', { className: 'card-title' }, movie.title)
    ),
    el('div', { className: 'card-footer' },
      details
    )
  );

  return element;
}