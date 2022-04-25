const tbody = document.querySelector('tbody');
const createForm = document.getElementById('createForm');
const editForm = document.getElementById('editForm');

document.getElementById('loadBooks').addEventListener('click', loadBooks);
createForm.addEventListener('submit', onCreate);
editForm.addEventListener('submit', onEditSubmit);
tbody.addEventListener('click', onTableClick);

loadBooks();

async function onEditSubmit(ev){
  ev.preventDefault();
  const formData = new FormData(ev.target);

  const id = formData.get('id');
  const author = formData.get('author').trim();
  const title = formData.get('title').trim();

  const result = await updateBook(id, { author, title });
  // tbody.appendChild(createRow(result._id, result));
  ev.target.reset();
  editForm.style.display = 'none';
  createForm.style.display = 'block';

  loadBooks();
}

function onTableClick(ev) {
  if (ev.target.className == 'delete') {
    onDelete(ev.target);
  } else if (ev.target.className == 'edit') {
    onEdit(ev.target);
  }
}

async function onDelete(btn) {
  const id = btn.parentElement.dataset.id;
  await deleteBook(id);
  btn.parentElement.parentElement.remove();
}

async function onEdit(btn) {
  const id = btn.parentElement.dataset.id;
  const book = await loadBookById(id);
  
  createForm.style.display = 'none';
  editForm.style.display = 'block';

  editForm.querySelector('[name=id]').value = id;
  editForm.querySelector('[name=author]').value = book.author;
  editForm.querySelector('[name=title]').value = book.title;
}

async function onCreate(ev) {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const author = formData.get('author').trim();
  const title = formData.get('title').trim();

  const result = await createBook({ author, title });
  tbody.appendChild(createRow(result._id, result));
  ev.target.reset();
}

async function loadBooks() {
  const books = await request('http://localhost:3030/jsonstore/collections/books');
  const result = Object.entries(books).map(([id, book]) => createRow(id, book));
  tbody.replaceChildren(...result);
}

async function loadBookById(id) {
  const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);
  return book;
}

function createRow(id, book) {

  const row = el('tr', {},
    el('td', {}, book.title),
    el('td', {}, book.author),
    el('td', {},
      el('button', { className: 'edit' }, 'Edit'),
      el('button', { className: 'delete' }, 'Delete')
    )
  );
  row.lastChild.dataset.id = id;
  return row;
}

async function createBook(book) {
  const result = await request('http://localhost:3030/jsonstore/collections/books', {
    method: 'post',
    body: JSON.stringify(book)
  });

  return result;
}

async function updateBook(id, book) {
  const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
    method: 'put',
    body: JSON.stringify(book)
  });
  return result;
}

async function deleteBook(id, book) {
  const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
    method: 'delete',
  });
  return result;
}

async function request(url, options) {
  if (options && options.body != undefined) {
    Object.assign(options, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  const response = await fetch(url, options);

  if (response.ok == false) {
    const error = await response.json();
    alert(error.message);
    throw new Error(error.message);
  }
  return response.json();
}

function el(type, attr, ...content) {
  const element = document.createElement(type);
  Object.assign(element, attr);

  for (let item of content) {
    if (typeof item === 'string' || typeof item === 'number') {
      item = document.createTextNode(item);
    }
    element.appendChild(item);
  }
  return element;
}