window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form').addEventListener('submit', submitNewStudent);
  loadData();
});

async function loadData() {

  try {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    if (response.status != 200) {
      const err = await response.json();
      throw new Error(err.message);
    }

    const data = Object.values(await response.json());
    document.querySelector('#results tbody').replaceChildren(...data.map(createStudent));

  } catch (error) {
    alert(error.message);
  }
}

async function submitNewStudent(ev) {
  ev.preventDefault();

  const formData = new FormData(ev.target)

  const data = [...formData.entries()].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});

  try {
    if (Object.values(data).some(v => v.trim() == '')) {
      throw new Error('All fields required!');
    }

    const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.status != 200) {
      const err = await response.json();
      throw new Error(err.message);
    }
    ev.target.reset();
    loadData()
  } catch (error) {
    alert(`${error.message}\n\nPress OK to continue -->`);
  }
}

function createStudent(data) {
  const tr = el('tr', {},
    el('td', {}, data.firstName),
    el('td', {}, data.lastName),
    el('td', {}, data.facultyNumber),
    el('td', {}, data.grade)
  );
  return tr
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