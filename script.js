const user = document.getElementById('user');
const post = document.getElementById('post');
const form = document.getElementById('form');

const userError= document.getElementById('userError');

form.addEventListener('submit', (e) => 
{
    if (user.value === '' || user.value == null) 
    {
        e.preventDefault();
        userError.innerHTML = "User is required";
    }

})

