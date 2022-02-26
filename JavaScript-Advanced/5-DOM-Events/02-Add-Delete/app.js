function addItem() {
    //create li element
    let input = document.getElementById('newItemText').value;
    const listItem = createElement('li', input )

    //create delete button

    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#'
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();
    })
    listItem.appendChild(deleteBtn);


    //add new <li> to document
    const uList = document.getElementById('items');
    if (input != '') {
        uList.appendChild(listItem);
    }
    document.getElementById('newItemText').value = '';

    //factory function
    function createElement(type, content){
        const element = document.createElement(type)
        element.textContent = content;
        return element;
    }
}