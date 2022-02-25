function addItem() {
    let input = document.getElementById('newItemText').value;

    const listItem = document.createElement('li');
    listItem.textContent = input;

    const uList = document.getElementById('items');
    if (input != '') {
        uList.appendChild(listItem);
    }

    document.getElementById('newItemText').value = '';
}