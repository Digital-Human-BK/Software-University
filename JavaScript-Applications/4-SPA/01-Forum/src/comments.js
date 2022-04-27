import { displayTopicContent, displayTopicComments, el } from './dom.js'

const commentsSection = document.querySelector('.comment');
const themeName = document.querySelector('h2');
const form = document.querySelector('form');
form.addEventListener('submit', createComment);

const id = sessionStorage.getItem('id');

loadComments(id);

async function loadComments() {
  commentsSection.replaceChildren('Loading...');

  const [topicData, comments] = await Promise.all([
    loadPost(id), //object
    loadPostComments(id) //array of objects
  ]);
  themeName.textContent = topicData.title;
  commentsSection.replaceChildren(displayTopicContent(topicData));
  const commentsDiv = el('div', {id: 'user-comment'}, ...comments.map(displayTopicComments));
  commentsSection.appendChild(commentsDiv);
}

async function loadPost() {
  try {
    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id);
    if (res.status != 200) {
      const error = await res.json();
      throw new Error(error.message);
    }
    return res.json();

  } catch (error) {
    alert(error.message);
  }
}

async function loadPostComments() {
  try {
    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
    if (res.status != 200) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();
    const comments = Object.values(data)
      .filter(c => c.id == id)
      .sort((a, b) => a.dateTime.localeCompare(b.dateTime));

    return comments;

  } catch (error) {
    alert(error.message);
  }
}

async function createComment(ev) {
  ev.preventDefault();

  const commentData = new FormData(form);

  const dateTime = new Date().toLocaleString();
  const username = commentData.get('username').trim();
  const commentText = commentData.get('postText').trim();

  try {
    if (username == '' || commentText == '') {
      throw new Error('All fields are required!');
    }

    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, dateTime, username, text: commentText })
    });

    if (res.ok == false) {
      const error = await res.json();
      throw new Error(error.message);
    }
    form.reset()
    loadComments();
  } catch (error) {
    alert(error.message);
  }
}