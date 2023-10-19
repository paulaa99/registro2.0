const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const password1Input = document.getElementById('password1');
const password2Input = document.getElementById('password2');
const terminosCheckbox = document.getElementById('terminos');
const mensajeerror = document.getElementById("mensaje-error");
const terminosButton = document.getElementById("terminosButton");
const registrarse = document.getElementById("registrarse");

function validateForm() {
   
    const inputs = [nombreInput, apellidoInput, emailInput, password1Input, password2Input];
  
    let allValid = true;
  
    for (const input of inputs) {
      input.setCustomValidity('');
      input.classList.remove("is-valid", "is-invalid");
    }
   
    for (const input of inputs) {
      if (input.value.trim() === '') {
        input.setCustomValidity('Este campo es obligatorio');
        input.reportValidity();
        input.classList.add("is-invalid");
        allValid = false;
      } else {
        input.classList.add("is-valid");
      }
    }
    for (const input of inputs) {
        input.addEventListener('input', function () {
          if (input.value.trim() === '') {
            input.classList.add('is-invalid');
          } else {
            input.classList.remove('is-invalid');
          }
        });
      }
   
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('is-invalid');
    allValid = false;
}
    
    if (password1Input.value.length < 6) {
      password1Input.setCustomValidity("La contraseña debe tener al menos 6 caracteres");
      password1Input.reportValidity();  
      password1Input.classList.add("is-invalid");
      allValid = false;
    } else {
        password1Input.classList.add("is-valid");
    }
  
  
    if (password1Input.value !== password2Input.value || password1Input.value.trim() === '') {
      password2Input.setCustomValidity("Las contraseñas no coinciden");
      password2Input.reportValidity();
      password2Input.classList.add("is-invalid");
      allValid = false;
    } else {
        password2Input.classList.add("is-valid");
    }
 
  if (terminosCheckbox.checked) {
      mensajeerror.innerText = '';
      terminosButton.classList.remove("rojo");
  } else {
      mensajeerror.innerText = "Debe aceptar los términos del servicio";
      terminosButton.classList.add("rojo");
      allValid = false;
  }

  return allValid;
}



registrarse.addEventListener("click", function () {
  registrarse.classList.add("registrado");
  validateForm();
  
  if (registrarse.classList.contains("registrado")) {
    // Habilitar validación en tiempo real para ciertos campos después de hacer clic en "registrarse"
    emailInput.addEventListener("keyup", function () {
      validateForm();
      emailInput.focus(); // Coloca el focus en el campo de email
    });
    password1Input.addEventListener("keyup", function () {
      validateForm();
      password1Input.focus(); // Coloca el focus en el campo de contraseña
    });
    password2Input.addEventListener("keyup", function () {
      validateForm();
      password2Input.focus(); // Coloca el focus en el campo de confirmación de contraseña
    });
    terminosCheckbox.addEventListener("change", function () {
      validateForm();
      terminosCheckbox.focus(); // Coloca el focus en la casilla de términos y condiciones
    });
  }
});
