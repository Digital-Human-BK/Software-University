function lockedProfile() {
    document.getElementById('main').addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.tagName === 'BUTTON') {
            const profile = ev.target.parentNode;
            const isLocked = profile.querySelector('input[value="lock"]').checked;
        
            if ( isLocked === false && ev.target.textContent == 'Show more') {
                profile.querySelector('div').style.display = 'block';
                ev.target.textContent = 'Hide it';
                
            } else if (isLocked == false && ev.target.textContent == 'Hide it'){
                profile.querySelector('div').style.display = 'none';
                ev.target.textContent = 'Show more';
            }
        }
    }
}