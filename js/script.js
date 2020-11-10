//New User Constructor function
function User(ci, name, last_name, email, psw, birth_place) {
  this.ci = ci;
  this.name = name;
  this.lastName = last_name;
  this.email = email;
  this. password = psw;
  this.birthPlace = birth_place;
}

function validateEmail(email) {
  // Devuelve true si el mail es valido, false si es invalido.
  // Consideramos valido que el email tenga al menos tres caracteres y que @ no este al comienzo o al final.
  return email.includes("@") && email.length > 2 && email[0] !== "@" && email[email.length - 1] !== "@";
}

function validatePasswords(psw_1, psw_2) {
  //Returns true (same psw), false (!== psw).
  if (psw_1 === psw_2)
    return true;
  else
    return false;
}

function getNewUserData() {
  let userData = {
    ci: document.querySelector("#ci-register").value,
    name: document.querySelector("#name-register").value,
    lastName: document.querySelector("#lastName-register").value,
    email: document.querySelector("#email-register").value,
    password: document.querySelector("#psw-register").value,
    birthPlace: document.querySelector("#birthPlace-register").value
  };
  return userData;
}

// UserList
let userList = [];

//get new user data (on pressing register button)
document.querySelector("#register-btn").addEventListener('click', () => {
  userList.push(getNewUserData());
  
});
