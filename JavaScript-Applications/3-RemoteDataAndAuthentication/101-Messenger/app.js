async function attachEvents() {
    document.getElementById('submit').addEventListener('click', onSubmit);
    document.getElementById('refresh').addEventListener('click', loadMessages);

    loadMessages();
}

const authorField = document.getElementById('author');
const contentField = document.getElementById('content');
const chat = document.getElementById('messages');

attachEvents();

async function onSubmit() {
    const author = authorField.value.trim();
    const content = contentField.value.trim();

    const result = await createMessage({ author, content });
    contentField.value = '';
    chat.value += `\n${author}: ${content}`;
}

async function loadMessages() {
    const res = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await res.json();
    chat.value = Object.values(data).map(m => `${m.author}: ${m.content}`).join('\n');
}

async function createMessage(msg) {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const opt = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(msg)
    }

    const res = await fetch(url, opt);
    return res.json();
}
