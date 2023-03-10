const signInButton = document.getElementById('login-box-form-signup-button');

signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    window.location.assign('/signup')
})