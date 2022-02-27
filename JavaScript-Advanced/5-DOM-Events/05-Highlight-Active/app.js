function focused() {
    for (const input of document.querySelectorAll('input')) {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    }
    
    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }
    function onBlur(ev) {
        ev.target.parentNode.removeAttribute('class')
    }
}