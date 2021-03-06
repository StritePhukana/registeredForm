const form = document.getElementById('form'); 
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
                      e.preventDefault();
                      
                      checkInputs();
                      });

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  
  if(usernameValue === '') {
   setErrorFor(username, 'Please enter a valid username');
  }else{
   setSuccessFor(username);
  }

  if(emailValue === '') {
    setErrorFor(email, 'Please enter valid email address');
   }else if(!isEmail(emailValue)){
    setErrorFor(email, 'Please enter valid email address'); 
   }else {
     setSuccessFor(email);
   }

   if(passwordValue === '') {
    setErrorFor(password, 'Connot leave blank');
   }else{
    setSuccessFor(password);
   }

   if(password2Value === '') {
    setErrorFor(password2, 'Connot leave blank');
   }else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Password does not match');
   }else{
     setErrorFor(password2);
   }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  
  
  small.innerText = message;
  
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//get from Stackflow
function isEmail(email) {
  return 
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}