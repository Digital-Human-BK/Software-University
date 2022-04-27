//initialization
// - find relevant section
// - detach section from dom

import { el, showView } from './dom.js';
import { showEdit } from './edit.js';
import { showHome } from './home.js';

const section = document.getElementById('movie-details');
section.remove();

//display logic

export function showDetails(id) {
  showView(section);
  getMovie(id);
}

async function getMovie(id) {
  section.replaceChildren(el('p', {}, 'Loading...'));

  const requests = [
    fetch('http://localhost:3030/data/movies/' + id),
    fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`),
  ];

  const userData = JSON.parse(sessionStorage.getItem('userData'));
  if (userData != null) {
    requests.push(fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`));
  }

  const [movieRes, likesRes, hasLikedRes] = await Promise.all(requests);

  const [movieData, likesCount, hasLiked] = await Promise.all([
    movieRes.json(),
    likesRes.json(),
    hasLikedRes && hasLikedRes.json()
  ]);

  section.replaceChildren(createDetails(movieData, likesCount, hasLiked));
}

function createDetails(movie, likes, hasLiked) {
  const movieId = movie._id;

  const userData = JSON.parse(sessionStorage.getItem('userData'));

  const controls = el('div', { className: 'col-md-4 text-center' },
    el('h3', { className: 'my-3' }, 'Movie Description'),
    el('p', {}, movie.description)
  );

  if (userData != null) {
    if (userData.id == movie._ownerId) {
      controls.appendChild(el('a', { className: 'btn btn-danger', href: '#', onClick: onDelete }, 'Delete'))
      controls.appendChild(el('a', { className: 'btn btn-warning', href: '#', onClick: onEdit }, 'Edit'))
    } else {
      if (hasLiked.length > 0) {
        controls.appendChild(el('a', { className: 'btn btn-primary', href: '#', onClick: onUnlike }, 'Unlike'))
      } else {
        controls.appendChild(el('a', { className: 'btn btn-primary', href: '#', onClick: onLike }, 'Like'))
      }
    }
  }
  controls.appendChild(el('span', { className: 'enrolled-span' }, `Liked ${likes}`));

  const element = el('div', { className: 'container' },
    el('div', { className: 'row bg-light text-dark' },
      el('h1', {}, `Movie title: ${movie.title}`),
      el('div', { className: 'col-md-8' },
        el('img', { className: 'img-thumbnail', src: movie.img, alt: 'Movie' })
      ),
      controls
    )
  );
  return element;

  async function onLike() {
    await fetch('http://localhost:3030/data/likes', {
      method: 'post',
      headers: {
        'X-Authorization': userData.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ movieId })
    });

    showDetails(movieId);
  }

  async function onUnlike() {
    const likeId = hasLiked[0]._id;

    await fetch('http://localhost:3030/data/likes/' + likeId, {
      method: 'delete',
      headers: {
        'X-Authorization': userData.token
      }
    });
    showDetails(movieId);
  }

  async function onEdit() {
    showEdit(movieId);
  }

  async function onDelete() {
    const answer = window.confirm('Are you sure you want to delete this moview?');
    if (answer) {
      await fetch('http://localhost:3030/data/movies/' + movieId, {
        method: 'delete',
        headers: {
          'X-Authorization': userData.token
        }
      });
      showHome();
    }
  }
}