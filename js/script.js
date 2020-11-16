//New User Constructor function
function User(ci, first_name, last_name, email, psw, birth_place) {
  this.ci = ci;
  this.firstName = first_name;
  this.lastName = last_name;
  this.email = email;
  this.password = psw;
  this.birthPlace = birth_place;
}

function createUser() {
  //Checks validity of user entered data and returns a new object if valid.
  //If not valid, returns false.    
  let userData, pswCheck;

  function checkAllFieldsComplete(user_object) {
    for (const keys in user_object) {
      if (!user_object[keys]) {
        return false;
      }
    }
    return true;
  }

  function checkUserId (id) {
    //Returns true if the id string has 8 digits without any punctuation signs.
    //Requires: 8 charachters, no "." to avoid float casting, check for NaN returns.
    return (id.length === 8 && !id.includes(".") && !isNaN(Number(id)));
  }
  
  function checkEmail(email) {
    // Devuelve true si el mail es valido, false si es invalido.
    // Consideramos valido que el email tenga al menos tres caracteres y que @ no este al comienzo o al final.
    return email.includes("@") && email.length > 2 && email[0] !== "@" && email[email.length - 1] !== "@";
  }

  function checkPasswords(psw_1, psw_2) {
    //Returns true (same psw), false (!== psw).
    if (psw_1 === psw_2 && psw_1.length > 3)
      return true;
    else
      return false;
  }

  pswCheck = document.querySelector("#psw-register-check").value;

  userData = new User(document.querySelector("#ci-register").value, document.querySelector("#name-register").value, document.querySelector("#lastName-register").value, document.querySelector("#email-register").value, document.querySelector("#psw-register").value, document.querySelector("#birthPlace-register").value);
  
  if (!checkAllFieldsComplete(userData)) {
    errorLabelSelectorRegister.innerHTML = "Debes llenar todos los campos";
    return false;
  } else if (!checkUserId(userData.ci)) {
   //alert("La cédula es incorrecta");
   errorLabelSelectorRegister.innerHTML = "Documento inválido"; 
    return false;
  } else if (!isNaN(userData.firstName) || !isNaN(userData.lastName)) {
    errorLabelSelectorRegister.innerHTML = "Nombre o Apellido inválido";
    return false;
  } else if (!checkEmail(userData.email)) { 
    //alert("Formato de correo electrónico inválido");
    errorLabelSelectorRegister.innerHTML = "Correo electrónico inválido";
    return false;
  } else if (!checkPasswords(userData.password, pswCheck)) {
    //alert("Contraseña inválida o no coinciden");
    errorLabelSelectorRegister.innerHTML = "Contraseña inválida";
    return false;
  } 
  else return userData;
}

function addNewUser(new_user, user_list) {
  // Gets new user data if data is valid
  // Check if user already exists by ID.
  // User exists? throw error, otherwise, add user to object list. 
  let userDataValid, userExists;
  
  userDataValid = !(new_user === false);

  user_list.forEach(element => {
    if (element.ci === new_user.ci) {
      userExists = true;
      errorLabelSelectorRegister.innerHTML = "El Usuario ya existe. Inicie sesión.";
      //alert("El usuario ya existe.");
    } else userExists = false;
  });

  if (userDataValid && !userExists) {
    user_list.push(new_user);
    return true;
  } else return false;
}

//START OF EXECUTION
let userList, errorLabelSelectorRegister, errorLabelSelectorLogin;
// Registered users go here.
userList = new Array();
errorLabelSelectorRegister = document.querySelector("#register-error-label");
errorLabelSelectorLogin = document.querySelector("#login-error-label");

//tester user: 12345678, pepe, trueno, pepe@hotmail.com, pepito, Polo Norte
userList.push(new User("12345678", "Pepe", "trueno", "pepe@hotmail.com", "pepito", "Artigas"));

//Register handler.
document.querySelector("#register-btn").addEventListener('click', () => {
  let newUser, status;

  errorLabelSelectorLogin.innerHTML = "";
  newUser = createUser();
  status = addNewUser(newUser, userList);

  if (status === true) { //i.e. succesfull
    window.location.href = `products.html?${String(newUser.firstName)}`;
  } 
});

//Login handler.
document.querySelector("#login-btn").addEventListener("click", () => {
  let enteredId, enteredPsw;
  errorLabelSelectorRegister.innerHTML = "";
  enteredId = document.querySelector("#ci-login").value;
  enteredPsw = document.querySelector("#psw-login").value;
  
  userList.forEach(element =>  {
    if (element.ci === enteredId && element.password === enteredPsw)
      window.location.href = `products.html?${String(element.firstName)}`;
    else  
      errorLabelSelectorLogin.innerHTML = "Usuario o contraseña incorrecta";
  })
});