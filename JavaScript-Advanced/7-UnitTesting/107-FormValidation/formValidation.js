function validate() {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', onClick);

    const checkbox = document.getElementById('company');
    const companyField = document.getElementById('companyInfo');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked == true) {
            companyField.style.display = 'block';
        } else {
            companyField.style.display = 'none';
        }
    });

    function onClick(ev) {
        ev.preventDefault();

        if (isValidUsername() && isValidEmail() && isValidPassword() && isValidNum()) {
            document.getElementById('valid').style.display = 'block';
        } else {
            document.getElementById('valid').style.display = 'none';
        }

        console.log(isValidUsername());
        console.log(isValidEmail());
        console.log(isValidPassword());
        console.log(isValidNum());
    }

    function isValidUsername() {
        const validUsernamePtn = /^[a-zA-Z0-9]{3,20}$/
        const username = document.getElementById('username');

        if (validUsernamePtn.test(username.value) == false) {
            username.style.borderColor = 'red';
            return false;
        };
        username.style.border = 'none';
        return true;
    }

    function isValidEmail() {
        const validEmailPtn = /^.*@.*\..*$/
        const email = document.getElementById('email');

        if (validEmailPtn.test(email.value) == false) {
            email.style.borderColor = 'red';
            return false;
        }
        email.style.border = 'none';
        return true;
    }

    function isValidPassword() {
        const validPassPtn = /^\w{5,15}$/;
        const pass = document.getElementById('password');
        const confirmPass = document.getElementById('confirm-password');

        if (validPassPtn.test(pass.value)
            && validPassPtn.test(confirmPass.value)
            && pass.value == confirmPass.value) {
            pass.style.border = 'none'
            confirmPass.style.border = 'none';
            return true;
        } else {
            pass.style.borderColor = 'red';
            confirmPass.style.borderColor = 'red';
            return false;
        }
    }

    function isValidNum() {
        const companyInput = document.getElementById('companyNumber')
        if (companyField.style.display == 'block') {
            if (Number.isNaN(companyInput.value)
                || companyInput.value < 1000
                || companyInput.value > 9999) {

                companyInput.style.borderColor = 'red';
                return false;
            } else {
                companyInput.style.border = 'none';
                return true;
            }
        } else {
            return true;
        }
    }
}