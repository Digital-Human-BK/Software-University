async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    try {
        const res = await fetch(url);
        if(res.status != 200){
            throw new Error(`${res.status} ${res.statusText}`);
        }

        const usersData = await res.json();

        Object.values(usersData).forEach((user, i) => {
            i += 1;
            createProfile(user, i);
        });
    } catch (error) {
        alert(error.message);
    }
}

function createProfile(user, i) {
    const main = document.getElementById('main');

    const profileCard = el('div', { className: 'profile' },
        el('img', { src: './iconProfile2.png', className: 'userIcon' }),
        el('label', {}, 'Lock'),
        el('input', { type: 'radio', name: `user${i}Locked`, value: 'lock', checked: true }),
        el('label', {}, ' Unlock'),
        el('input', { type: 'radio', name: `user${i}Locked`, value: 'unlock' }),
        el('br', {}),
        el('hr', {}),
        el('label', {}, 'Username:'),
        el('input', { type: 'text', name: `user${i}Username`, value: `${user.username}`, disabled: true, readonly: true }),
        el('div', { id: `user${i}HiddenFields` },
            el('hr', {}),
            el('label', {}, 'Email:'),
            el('input', { type: 'email', name: `user${i}Email`, value: `${user.email}`, disabled: true, readonly: true }),
            el('label', {}, 'Age:'),
            el('input', { type: 'email', name: `user${i}Age`, value: `${user.age}`, disabled: true, readonly: true })
        ),
        el('button', {}, 'Show more')
    );

    main.addEventListener('click', toggleInfo);
    main.appendChild(profileCard);
}

function toggleInfo(ev) {
    if (ev.target.tagName = 'BUTTON') {
        const btn = ev.target;
        const parentDiv = btn.parentElement;
        const lockRadio = parentDiv.querySelector('input[value=lock]');
        const userId = '#' + lockRadio.name.slice(0, -6) + 'HiddenFields';

        if (btn.textContent == 'Show more' && lockRadio.checked == false) {
            parentDiv.querySelector(userId).style.display = 'block';
            btn.textContent = 'Hide it';
        } else if (btn.textContent == 'Hide it' && lockRadio.checked == false) {
            parentDiv.querySelector(userId).style.display = 'none';
            btn.textContent = 'Show more';
        }
    }
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