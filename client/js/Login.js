// Field and button for the form to get user info to login
const usernameField = document.getElementById('login-box-form-username');
const passwordField = document.getElementById('login-box-form-password');
const loginButton = document.getElementById('login-box-form-submit')
const errorText = document.getElementById('login-box-form-error');

// This function checks if the field are correct in order to login user
function checkFields() {
    if(usernameField.value.length == 0 || passwordField.value.length == 0) {
        errorText.textContent = 'Fields can not be empty';
        errorText.style.visibility = 'visible';
    } else {
        errorText.style.visibility = 'hidden';
    }
}

loginButton.addEventListener('click', () => {
    checkFields();
})

// Logic for going to the sign up screen
const signInButton = document.getElementById('login-box-form-signup-button');

signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    window.location.assign('/signup')
})