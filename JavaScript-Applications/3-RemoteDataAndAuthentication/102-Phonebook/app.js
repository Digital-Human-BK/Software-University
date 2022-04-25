function attachEvents() {
    phonebookUl.addEventListener('click', deleteEntry);
    document.getElementById('btnLoad').addEventListener('click', loadEntries);
    document.getElementById('btnCreate').addEventListener('click', createEntry);
    loadEntries();
}

const url = 'http://localhost:3030/jsonstore/phonebook/';
const phonebookUl = document.getElementById('phonebook');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');
attachEvents();

async function loadEntries() {
    const res = await fetch(url);
    const data = await res.json();
    phonebookUl.replaceChildren(...Object.values(data).map(createLi));
    
}

function createLi(p) {
    const li = document.createElement('li');
        li.textContent = `${p.person}: ${p.phone}`;
        li.dataset.id = p._id;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);
        return li;
}

async function deleteEntry(ev) {
    const btn = ev.target;
    const parent = ev.target.parentElement;

    if (btn.tagName == 'BUTTON' && btn.textContent == 'Delete') {
        const opt = { method: 'delete' }
        const response = await fetch(url + parent.dataset.id, opt);
        parent.remove();
        const result = await response.json();
    }
}

async function createEntry() {

    const person = personInput.value.trim();
    const phone = phoneInput.value.trim();

    if (phone != '' && person != '') {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ person, phone })
        }

        const response = await fetch(url, options);
        const result = await response.json();
        personInput.value = '';
        phoneInput.value = '';
        loadEntries();
    }
}