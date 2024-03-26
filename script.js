let validateEmailReg = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
let form = document.getElementById('form');
let email = document.getElementById('email');
let success_message = document.getElementById('success_message');
let newsletter = document.getElementById('newsletter');
let myError = document.getElementById('error');
let button_success = document.getElementById('button_success');

function applyValidMailStyle(newsletter, success_message) {
  newsletter.style.display = "none";
  success_message.style.display = "flex";
}

function applyErrorStyle(myError, email) {
  myError.style.visibility = "visible";
  email.style.borderColor = "tomato";
  email.style.background = "#ffe8e6";
  email.style.color = "tomato";
}

form.addEventListener('submit', (e) => {
    if(validateEmailReg.test(email.value)) {
        applyValidMailStyle(newsletter, success_message);
        e.preventDefault();
    }
    else {
        applyErrorStyle(myError, email);
        e.preventDefault();
    }
})

button_success.addEventListener('click', (e) => {
    success_message.style.display = "none";
    newsletter.style.display = "flex";
})