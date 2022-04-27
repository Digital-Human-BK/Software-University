import { showView } from './dom.js';
import { showDetails } from './details.js';

const section = document.getElementById('edit-movie');

const form = section.querySelector('form');
form.addEventListener('submit', editMovie);

section.remove();

//display logic
let movieId = null;
export function showEdit(id) {
  showView(section);
  movieId = id;
}

async function editMovie(ev) {
  ev.preventDefault();
  console.log(movieId);

  const userData = JSON.parse(sessionStorage.getItem('userData'));

  const newMovieData = new FormData(form);

  const title = newMovieData.get('title').trim();
  const description = newMovieData.get('description').trim();
  const img = newMovieData.get('imageUrl').trim();

  try {
    if (title == '' || description == '' || img == '') {
      throw new Error('All fields required!\n\nPress OK to continue')
    }

    const res = await fetch('http://localhost:3030/data/movies/' + movieId, {
      method: 'put',
      headers: {
        'X-Authorization': userData.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, img })
    });

    if (res.ok == false) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();

    showDetails(movieId);
    form.reset();

    return data;

  } catch (error) {
    alert(error.message);
  }
}