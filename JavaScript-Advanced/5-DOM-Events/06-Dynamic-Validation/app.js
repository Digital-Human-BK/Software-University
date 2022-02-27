function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev){
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/

        if (ev.target.value.match(pattern)) {
            ev.target.removeAttribute('class')
        } else {
            ev.target.className ='error';
        }
    }
}