// Elements for the sign up screen
const emailField = document.getElementById('signup-box-form-email');
const usernameField = document.getElementById('signup-box-form-username');
const passwordField = document.getElementById('signup-box-form-password');
const confirmPasswordField = document.getElementById('signup-box-form-confirm');
const signupButton = document.getElementById('signup-box-form-submit-button');
const formError = document.getElementById('signup-box-form-error');

// Checks is both the password and confirm password are the same
function checkConfirmPassword() {
    if (passwordField.value !== confirmPasswordField.value) {
        throw 'confirm';
    }
}

// Checks if password has at least one Upper and Lower case letters, one digit, and one special character
function checkPassword() {
    if (!String(passwordField.value).match( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
        throw 'password';
    }
}

// Checks if the email is valid
function checkEmail() {
    if(!String(emailField.value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
        throw 'email';
    }
}

// Checks if there is any issues with the data entered
function checkFields() {
    if (emailField.value.length == 0 || usernameField.value.length == 0 || passwordField.value.length == 0 || confirmPasswordField.value.length == 0) {
        formError.textContent = 'Field can not be empty';
        formError.style.visibility = 'visible'

        if (emailField.value.length == 0) {
            emailField.style.borderBlockColor = 'red';
        } else {
            emailField.style.borderBlockColor = 'black';
        }
        if (usernameField.value.length == 0) {
            usernameField.style.borderBlockColor = 'red';
        } else {
            usernameField.style.borderBlockColor = 'black';
        }
        if (passwordField.value.length == 0) {
            passwordField.style.borderBlockColor = 'red';
        } else {
            passwordField.style.borderBlockColor = 'black';
        }
        if (confirmPasswordField.value.length == 0) {
            confirmPasswordField.style.borderBlockColor = 'red';
        } else {
            confirmPasswordField.style.borderBlockColor = 'black';
        }
    } else {
        try {
            checkEmail();
            checkPassword();
            checkConfirmPassword();
            
            formError.style.visibility = 'hidden';
            emailField.style.borderBlockColor = 'black';
            usernameField.style.borderBlockColor = 'black';
            passwordField.style.borderBlockColor = 'black';
            confirmPasswordField.style.borderBlockColor = 'black';
        } catch (err) {
            if (err == 'email') {
                formError.textContent = 'Invalid email';
                emailField.style.borderBlockColor = 'red';
            } else {
                emailField.style.borderBlockColor = 'black';
            }
            if (err == 'password') {
                formError.textContent = 'Invalid password (Ex. A, a, 1, $)';
                passwordField.style.borderBlockColor = 'red';
            } else {
                passwordField.style.borderBlockColor = 'black';
            }

            if (err == 'confirm') {
                formError.textContent = 'Password need to match';
                passwordField.style.borderBlockColor = 'red';
                confirmPasswordField.style.borderBlockColor = 'red';
            } else {
                passwordField.style.borderBlockColor = 'black';
                confirmPasswordField.style.borderBlockColor = 'black';
            }

            formError.style.visibility = 'visible';
        }
    }
}

signupButton.addEventListener('click', () => {
    checkFields();
})

const passwordStrengthSection = document.getElementById('signup-box-form-passwordInfo-strength');
const passwordStatus = document.getElementById('signup-box-form-passwordInfo-strength-status');

// Checks password strength
passwordField.addEventListener('input', (e) => {
    e.preventDefault();
    
    if(e.target.value.length > 0) {
        passwordStrengthSection.style.visibility = 'visible';
    } else {
        passwordStrengthSection.style.visibility = 'hidden';
    }
 
    if(e.target.value.match(/[a-z]+/) && e.target.value.match(/[A-Z]+/) && e.target.value.match(/[0-9]+/) && e.target.value.match(/[$@#%!]+/) && e.target.value.length > 8) {
        passwordStatus.style.color = 'green';
        passwordStatus.textContent = 'Strong';
    } else if (e.target.value.match(/[a-z]+/) && e.target.value.match(/[A-Z]+/) && e.target.value.match(/[0-9]+/) && e.target.value.length > 6) {
        passwordStatus.style.color = 'yellow';
        passwordStatus.textContent = 'Good';
    } 
    else if (e.target.value.match(/[a-z]+/) && e.target.value.match(/[A-Z]+/) && e.target.value.match(/[0-9]+/)) {
        passwordStatus.style.color = 'orange';
        passwordStatus.textContent = 'Fine';
    } else {
        passwordStatus.style.color = 'red';
        passwordStatus.textContent = 'Weak';
    }
})

const viewPassword = document.getElementById('signup-box-form-passwordInfo-show');

// Change password field to text so user can see their password
viewPassword.addEventListener('click', (e) => {
    e.preventDefault();

    if (passwordField.type == 'password') {
        passwordField.type = 'text';
        confirmPasswordField.type = 'test';
    } else {
        passwordField.type = 'password';
        confirmPasswordField.type = 'password';
    }
})

// Logic to go to the log in screen
const LogInButton = document.getElementById('signup-box-form-login-button');

LogInButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    window.location.assign('/login')
})