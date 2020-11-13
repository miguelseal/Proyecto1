let userNameIndex, userName;

userNameIndex = window.location.href.indexOf("?");
userName = window.location.href.slice(userNameIndex+1);

document.querySelector("#user-name").innerHTML = `Bienvenido ${String(userName)}`;