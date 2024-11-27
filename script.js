const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

const emailError= document.getElementById('emailError');

form.addEventListener('submit', (e) => 
{
    if (email.value === '' || email.value == null) 
    {
        e.preventDefault();
        emailError.innerHTML = "Email is required";
    }

})