const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', formControl);


function formControl(e) {
    e.preventDefault();

  // console.log(e.currentTarget.elements);
  
  const {
    elements: { email, password} 
  } = e.currentTarget;

     if ( email.value === "" || password.value === "") {
       alert(" всі поля повинні бути заповнені.")
       return;
     }
  
  const formValue = {
    email: e.currentTarget.elements.email.value,
    password: e.currentTarget.elements.password.value,
  };
  console.log(formValue)

  e.currentTarget.reset(); 
};
