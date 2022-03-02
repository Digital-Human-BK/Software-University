function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let select = document.getElementById('menu');
    let option = document.createElement('option');
    if (text.value != '' && value.value != '') {
        option.value = value.value;
        option.textContent = text.value;
        select.appendChild(option);
    }
    text.value = '';
    value.value = '';
}