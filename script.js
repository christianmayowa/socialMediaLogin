// CATCHING EXPLANATION DIV
let explainDiv = document.querySelector('.explanation')


// FUNCTION THAT CHANGES TO SIGNUP FORM

$('.loginToSignup').click(function(e) {
    e.preventDefault();
    $('.explanation').animate({
        'left' : '0',
        'border-top-right-radius' : '0',
        'border-bottom-right-radius' : '0',
        'border-top-left-radius': '3%',
        'border-bottom-left-radius': '3%'
    }, 1700);                 
});

$('.signUpToLogin').click(function(e) {
    e.preventDefault();
    $('.explanation').animate({
        'left' : '50%',
        'border-top-right-radius' : '3%',
        'border-bottom-right-radius' : '3%',
        'border-top-left-radius': '0',
        'border-bottom-left-radius': '0'
    }, 1700);                 
});

// FORM VALIDATION


// EMAIL
let signUpEmail = document.querySelector("#sign-up-email");

// USERNAME
let signUpUserName = document.querySelector("#sign-up-username")

// FIRST PASSOWRD INPUT
let firstPassword = document.getElementById('sign-up-password');
// CONFIRM PASSWORD INPUT
let secondPassword = document.getElementById('sign-up-password-two');



// SIGNUP BUTTON
let signUpBttn = document.querySelector('#signUpBttn')

signUpBttn.addEventListener("click", (e) => {
    e.preventDefault()
    // PASSWORD MUST MATCH
    
    if(signUpEmail.value == '') {
        signUpEmail.style.border = "1px solid red";
        signUpEmail.focus()
    } else if(signUpUserName.value == '') {
        signUpUserName.style.border = "1px solid red";
        signUpUserName.focus()
    } else if (firstPassword.value !== secondPassword.value || secondPassword.value == ''  ||firstPassword.value == ''  ) {
        secondPassword.style.border = "1px solid red";
        secondPassword.focus()
    }else{
        secondPassword.style.border = "1px solid blue";
        signUpEmail.style.border = "1px solid blue";
        signUpUserName.style.border = "1px solid blue";
    }
})

