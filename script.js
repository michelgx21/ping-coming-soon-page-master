const inputEmail=document.getElementById('Email');

const form=document.querySelector('form');

const text1=document.getElementById('text1');

form.addEventListener('submit' ,(e)=>{
    if(inputEmail.value==''){
        text1.textContent='Email cannot be blank';
        inputEmail.style.borderColor='hsl(354, 100%, 66%)';
    }else{
        console.log(inputEmail.value);
    }

    e.preventDefault()
})

inputEmail.addEventListener("keyup",()=>{
    if(emailValidator(inputEmail.value)!==true){
        text1.textContent='Please provide a valid email address';
        inputEmail.style.borderColor='hsl(354, 100%, 66%)';
    }else{
        text1.textContent='';
        inputEmail.style.borderColor='';
    }
})

function emailValidator(inputEmail){
    const emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailPattern.test(inputEmail);
}