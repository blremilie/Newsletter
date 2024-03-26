let validateEmailReg = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
let form = document.getElementById('form');
let email = document.getElementById('email');
let success_message = document.getElementById('success_message');
let newsletter = document.getElementById('newsletter');
let myError = document.getElementById('error');
let button_success = document.getElementById('button_success');

form.addEventListener('submit', (e) => {
    if(validateEmailReg.test(email.value)) {
        newsletter.style.display = "none";
        success_message.style.display = "flex";
        e.preventDefault();
    }
    else {
        myError.style.visibility = "visible";
        email.style.borderColor = "tomato";
        email.style.background = "#ffe8e6";
        email.style.color= "tomato";
        e.preventDefault();
    }
})

button_success.addEventListener('click', (e) => {
    success_message.style.display = "none";
    newsletter.style.display = "flex";
})