let userData = null;

window.addEventListener('DOMContentLoaded', () => {
  userData = JSON.parse(sessionStorage.getItem('userData'));
  loadData();
  //toogle needed buttons and attach events
  if (userData != null) {
    document.getElementById('user').style.display = 'inline-block';
    document.getElementById('guest').style.display = 'none';
    document.querySelector('.email span').textContent = userData.email;
    document.querySelector('#addForm .add').disabled = false;
    document.getElementById('logout').addEventListener('click', onLogout);
  } else {
    document.getElementById('user').style.display = 'none';
    document.querySelector('.email span').textContent = 'guest';
  }

  document.querySelector('.load').addEventListener('click', loadData);

  document.getElementById('addForm').addEventListener('submit', onCreateSubmit);
  document.getElementById('main').addEventListener('click', onClick);
});

//handle delete and update buttons using delegation on main element
async function onClick(ev) {
  if (ev.target.className == 'update') {
    const btn = ev.target;
    const parent = btn.parentElement;
    const angler = parent.querySelector('.angler').value.trim();
    const weight = parent.querySelector('.weight').value.trim();
    const species = parent.querySelector('.species').value.trim();
    const location = parent.querySelector('.location').value.trim();
    const bait = parent.querySelector('.bait').value.trim();
    const captureTime = parent.querySelector('.captureTime').value.trim();

    const data = {angler, weight, species, location, bait, captureTime};

    await updateCatch(btn.dataset.id, data)

  } else if (ev.target.className == 'delete') {
    ev.target.parentElement.remove();
    await deleteCatch(ev.target.dataset.id);
  }
}

//update subfunction to the buttons handler
async function updateCatch(id, data) {

  try {
    const response = await fetch('http://localhost:3030/data/catches/' + id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': userData.token
      },
      body: JSON.stringify(data)
    });

    return await response.json();

  } catch (error) {
    alert(error.message);
  }
}

//delete subfunction to the buttons handler
async function deleteCatch(id) {
  try {
    const res = await fetch('http://localhost:3030/data/catches/' + id, {
      method: 'delete',
      headers: {
        'X-Authorization': userData.token
      }
    });

    return await res.json();
  } catch (error) {
    alert(error.message);
  }
}

//log-out user
async function onLogout() {
  const response = await fetch('http://localhost:3030/users/logout', {
    method: 'get',
    headers: {
      'X-Authorization': userData.token
    }
  });
  if (response.status == 204) {
    sessionStorage.clear();
    window.location.reload();
  }
}

//createNewCatchEntry
async function onCreateSubmit(ev) {
  ev.preventDefault();

  if (userData == null) {
    window.location = '/login.html';
    return;
  }

  const formData = new FormData(ev.target);

  const data = [...formData.entries()].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});

  try {
    if (Object.values(data).some(x => x.trim() == '')) {
      throw new Error('All fields are required!\n\nPress OK to continue')
    }

    const response = await fetch('http://localhost:3030/data/catches', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': userData.token
      },
      body: JSON.stringify(data)
    });

    if (response.ok != true) {
      const err = await response.json();
      throw new Error(err.message);
    }

    ev.target.reset();
    loadData();

  } catch (error) {
    alert(error.message);
  }
}

//load and display saved catches data from server
async function loadData() {
  const res = await fetch('http://localhost:3030/data/catches');
  const data = await res.json();

  document.getElementById('catches').replaceChildren(...data.map(createPreview));
}

//create catchPreviewCard
function createPreview(data) {

  const isOwner = (userData && userData.id == data._ownerId);

  const updateBtn = el('button', { className: 'update', disabled: !isOwner }, 'Update');
  updateBtn.dataset.id = data._id;
  const deleteBtn = el('button', { className: 'delete', disabled: !isOwner }, 'Delete');
  deleteBtn.dataset.id = data._id;

  const element = el('div', { className: 'catch' },
    el('label', {}, 'Angler'),
    el('input', { type: 'text', className: 'angler', value: data.angler, disabled: !isOwner }),
    el('label', {}, 'Weight'),
    el('input', { type: 'text', className: 'weight', value: data.weight, disabled: !isOwner }),
    el('label', {}, 'Species'),
    el('input', { type: 'text', className: 'species', value: data.species, disabled: !isOwner }),
    el('label', {}, 'Location'),
    el('input', { type: 'text', className: 'location', value: data.location, disabled: !isOwner }),
    el('label', {}, 'Bait'),
    el('input', { type: 'text', className: 'bait', value: data.bait, disabled: !isOwner }),
    el('label', {}, 'Capture Time'),
    el('input', { type: 'text', className: 'captureTime', value: data.captureTime, disabled: !isOwner }),
    updateBtn,
    deleteBtn
  )

  return element;
}

//create dom element function
function el(type, attr, ...content) {
  const element = document.createElement(type);
  Object.assign(element, attr);

  for (let item of content) {
    if (typeof item == 'string' || typeof item == 'number') {
      item = document.createTextNode(item);
    }
    element.appendChild(item);
  }
  return element;
}