function toggle() {

    let extra = document.getElementById('extra')
    let buttonRef = document.getElementsByClassName('button')[0];
    
    if (extra.style.display == 'none') {
        buttonRef.textContent = 'Less';
        extra.style.display = 'block';
    } else {
        buttonRef.textContent = 'More';
        extra.style.display = 'none';
    }    
}