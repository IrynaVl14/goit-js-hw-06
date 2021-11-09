const form = document.querySelector('.login-form');
const inputMail = form.querySelector('[type="email"]');
const inputPassword = form.querySelector('[type="password"]');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    onFormValidate();
    const formElement = event.currentTarget.elements   
    const mail = formElement.email.value;
    const password = formElement.password.value;
    const formData = {
        mail, password
    };
    console.log(formData);   
    form.reset();
}

function onFormValidate() {    
    if (inputPassword.value === '' || inputMail.value === '' ) {
       return alert('Все поля должны быть заполнены');
        
    }
       return;       
}

