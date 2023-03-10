const LogInButton = document.getElementById('signup-box-form-login-button');

LogInButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    window.location.assign('/login')
})