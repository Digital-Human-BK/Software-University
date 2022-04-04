function solution() {
    const [list, sent, discarded] = document.querySelectorAll('.card ul');
    const nameField = document.querySelector('.card input');
    const addBtn = document.querySelector('.card button');
    addBtn.addEventListener('click', addGift);


    function addGift() {
        const sendBtn = el('button', { id: 'sendButton' }, 'Send');
        const discardBtn = el('button', { id: 'discardButton' }, 'Discard');
        sendBtn.addEventListener('click', sendGift);
        discardBtn.addEventListener('click', discardGift);

        const li = el('li', { className: 'gift' }, nameField.value.trim(), sendBtn, discardBtn);
        list.appendChild(li);
        nameField.value = '';

        Array.from(list.children)
            .sort((a, b) => a.firstChild.textContent.localeCompare(b.firstChild.textContent))
            .forEach(li => list.appendChild(li));
    }

    function sendGift(ev) {
        const li = ev.target.parentNode;
        sent.appendChild(li);
        li.lastChild.remove();
        li.lastChild.remove();
    }

    function discardGift(ev) {
        const li = ev.target.parentNode;
        discarded.appendChild(li);
        li.lastChild.remove();
        li.lastChild.remove();        
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
}