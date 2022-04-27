import {createTopicPreview} from './dom.js'

//attach event listeners 
const form = document.querySelector('form');
form.addEventListener('submit', createTopic);

document.querySelector('.cancel').addEventListener('click', (ev) => {
  ev.preventDefault();
  form.reset();
});
document.querySelector('.topic-container').addEventListener('click', showTopicPage)

//initial topics load
displayTopics();

async function createTopic(ev) {
  ev.preventDefault();

  const formData = new FormData(form);
  
  const dateTime = new Date().toLocaleString();
  const title = formData.get('topicName').trim();
  const username = formData.get('username').trim();
  const postText = formData.get('postText').trim();

  try {

    if (title == '' || username == '' || postText == '') {
      throw new Error('All fields are required!');
    }

    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ dateTime, title, username, postText })
    })

    if (res.ok == false) {
      const error = await res.json();
      throw new Error(error.message);
    }

    form.reset();
    displayTopics();

  } catch (error) {
    alert(error.message);
  }
}

function showTopicPage(ev) {
  if (ev.target.tagName == 'H2') {
    let id = ev.target.parentElement.parentElement.parentElement.dataset.id;
    sessionStorage.setItem('id', id);
    
    window.location = '/theme-content.html';
  }
}

async function displayTopics() {
  try {
    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

    if (res.ok == false) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();
    document.querySelector('.topic-container').replaceChildren(...Object.values(data).map(createTopicPreview));
  } catch (error) {
    alert(error.message);
  }
}