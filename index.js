const form = document.querySelector("form");
const submitBtn = form.querySelector("button");
const fName = form.querySelector("#fName");
const lName = form.querySelector('#lName');
const phoneNum = form.querySelector('#phone');
const email = form.querySelector("#email");
const password = form.querySelector('#password');
const cPassword = form.querySelector('#cPassword');

console.log(password.value, cPassword.value)

form.addEventListener('submit',(e) => {
   
    if (!fName.validity.valid) {
       e.preventDefault();
       showError();
   }
    if (!lName.validity.valid) {
       e.preventDefault();
       showError();
   }
    if (!email.validity.valid) {
       e.preventDefault();
       showError();
   }
    if (!phoneNum.validity.valid) {
       e.preventDefault();
       showError();
   }

   if (!password.validity.valid) {
       e.preventDefault();
       passwordError();
   } 

   if (cPassword.value !== password.value) {
       e.preventDefault();
       passwordError();
   } 

   if (password.value === "password" || password.value === "Password") {
       e.preventDefault();
       passwordError();
   } 

   
})

const showError = () => {
    if (fName.value === "") {
        fName.setCustomValidity('Please enter your name')
    }

    if (fName.validity.valueMissing) {
        fName.setCustomValidity("Please Enter your name");
    }

    if (fName.validity.tooShort) {
        fName.setCustomValidity("Please enter two or more characters");
    }

    if (fName.validity.tooLong) {
        fName.setCustomValidity("Please enter 20 or less characters")
    }
    if (lName.validity.valueMissing) {
        lName.setCustomValidity("Please Enter your last name");
    }

    if (lName.validity.tooShort) {
        lName.setCustomValidity("Please enter two or more characters");
    }

    if (lName.validity.tooLong) {
        lName.setCustomValidity("Please enter 20 or less characters")
    }
    if (email.validity.valueMissing) {
        email.setCustomValidity("Please Enter your email");
    }

  
    if (phoneNum.validity.valueMissing) {
        phoneNum.setCustomValidity("Please Enter your Name");
    }

}

const passwordError = () => {
    if (password.value !== cPassword.value) {
        password.setCustomValidity('Passwords do not match')
    }

    if (password.value === "password" || password.value === "Password") {
        password.setCustomValidity("Password can't be password")
    }

    if (password.validity.patternMismatch) {
        password.setCustomValidity('Please use atleast 1 uppercase, lowercase, special characters, and a number');
    }

    if (password.validity.tooShort) {
        password.setCustomValidity('Please enter 6 or more characters')
    }

}
