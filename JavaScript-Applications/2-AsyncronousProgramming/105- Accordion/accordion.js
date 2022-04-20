async function solution() {
    const posts = await getPostTitles();

    posts.forEach(p => {
        createArticle(p);
    });

    document.getElementById('main').addEventListener('click', toggleInfo);
}
solution();

async function getPostTitles() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    try {
        const response = await fetch(url);
        if (response.status != 200) {
            throw new Error(`${response.status} ${response.statusText}`)
        }

        return response.json();

    } catch (error) {
        alert(`${error.message}\n\nPress OK to continue.`);
    }
}

async function getPostContent(id) {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id;

    const res = await fetch(url);
    return await res.json();
}

async function toggleInfo(ev) {
    if (ev.target.tagName == 'BUTTON') {
        const btn = ev.target;
        const parentDiv = btn.parentElement.parentElement;
        const id = btn.id;

        const extraDiv = parentDiv.querySelector('.extra');
        const p = parentDiv.querySelector('#extra-Info');

        try {
            const data = await getPostContent(id);

            if (btn.textContent == 'More') {
                p.textContent = data.content;
                extraDiv.style.display = 'block';
                btn.textContent = 'Less';
            } else if (btn.textContent == 'Less') {
                extraDiv.style.display = 'none';
                btn.textContent = 'More';
            }

        } catch (error) {
            if (btn.textContent == 'More') {
                p.textContent = 'Content not found!';
                extraDiv.style.display = 'block';
                btn.textContent = 'Less';
            } else if (btn.textContent == 'Less') {
                extraDiv.style.display = 'none';
                btn.textContent = 'More';
            }
        }

    }
}

function createArticle(post) {
    const article = el('div', { className: 'accordion' },
        el('div', { className: 'head' },
            el('span', {}, `${post.title}`),
            el('button', { className: 'button', id: `${post._id}` }, 'More')
        ),
        el('div', { className: 'extra' }, el('p', { id: 'extra-Info' }))
    )
    document.getElementById('main').appendChild(article);
}

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