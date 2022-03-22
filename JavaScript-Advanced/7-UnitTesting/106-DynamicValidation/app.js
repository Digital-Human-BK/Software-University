function validate() {
    const input = document.getElementById('email');
    input.addEventListener('change', onChange);

    function onChange(ev) {
        const validEmailPattern = /^[a-z]+@[a-z]+(\.[a-z]+)+$/;
        if (validEmailPattern.test(input.value) == false) {
            input.className = 'error';
        } else {
            input.removeAttribute('class');
        }
    }
}