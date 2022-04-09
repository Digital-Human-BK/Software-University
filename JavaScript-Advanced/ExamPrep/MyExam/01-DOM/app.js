window.addEventListener('load', solve);

function solve() {
    const genreF = document.getElementById('genre');
    const nameF = document.getElementById('name');
    const authorF = document.getElementById('author');
    const dateF = document.getElementById('date');
    const allHitsContainer = document.querySelector('.all-hits-container');
    const savedContainer = document.querySelector('.saved-container');
    const totalLikes = document.querySelector('#total-likes p');
    
    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', addSong);

    function addSong(ev) {
        ev.preventDefault();

        const genre = genreF.value.trim();
        const name = nameF.value.trim();
        const author = authorF.value.trim();
        const date = dateF.value.trim();

        if (genre != '' && name != '' && author != '' && date != '') {
            const saveBtn = el('button', { className: 'save-btn' }, 'Save song');
            const likeBtn = el('button', { className: 'like-btn' }, 'Like song');
            const deleteBtn = el('button', { className: 'delete-btn' }, 'Delete');

            const div = el('div', { className: 'hits-info' },
                el('img', { src: './static/img/img.png' }),
                el('h2', {}, `Genre: ${genre}`),
                el('h2', {}, `Name: ${name}`),
                el('h2', {}, `Author: ${author}`),
                el('h3', {}, `Date: ${date}`)
            )

            div.appendChild(saveBtn);
            div.appendChild(likeBtn);
            div.appendChild(deleteBtn);

            saveBtn.addEventListener('click', saveSong.bind(null,div, saveBtn, likeBtn));
            likeBtn.addEventListener('click', likeSong.bind(null, likeBtn));
            deleteBtn.addEventListener('click', deleteSong.bind(null, div));

            allHitsContainer.appendChild(div);

            document.querySelector('.container-text form').reset();
        }
    }

    function saveSong(div, saveBtn, likeBtn) {
        savedContainer.appendChild(div);
        saveBtn.remove();
        likeBtn.remove();
    }

    function likeSong(btn) {
        btn.disabled = true;
        let message = totalLikes.textContent.substring(0, 13);
        let likes = totalLikes.textContent.substring(13);
        likes = Number(likes) + 1;
        message = message + likes;
        totalLikes.textContent = message;
    }

    function deleteSong(div) {
        div.remove()
    };

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
}