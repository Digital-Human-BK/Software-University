import { showView } from './dom.js';
import { showHome } from './home.js';

const section = document.getElementById('add-movie');

const form = section.querySelector('form');
form.addEventListener('submit', createMovie);
section.remove();

//display logic

export function showCreate() {
  showView(section);
}

async function createMovie(ev){
  ev.preventDefault();

  const userData = JSON.parse(sessionStorage.getItem('userData'));

  const movieData = new FormData(form);

  const title = movieData.get('title').trim();
  const description = movieData.get('description').trim();
  const img = movieData.get('imageUrl').trim();

  try {
    if(title == '' || description == '' || img == '') {
      throw new Error('All fields required!\n\nPress OK to continue')
    }

    const res = await fetch('http://localhost:3030/data/movies', {
      method: 'post',
      headers: {
        'X-Authorization': userData.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, description, img})  
    });

    if(res.ok == false) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();

    form.reset();
    showHome();

    return data;
    
  } catch (error) {
    alert(error.message);
  }
}