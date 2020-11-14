let userNameIndex, userName;

//Show userName.
userNameIndex = window.location.href.indexOf("?");
userName = window.location.href.slice(userNameIndex+1);
document.querySelector("#user-name").innerHTML = `Usuario: ${String(userName)}`;

//Show Timer (2 hours)
//Tag selectors.
const HOURS = document.getElementById("hours");
const MINUTES = document.getElementById("minutes");
const SECONDS = document.getElementById("seconds");
//Get current time.

function showClock() {
  //Get real time clock
  setInterval( () => {
  let clock, hours, minutes, seconds;    

  clock = new Date();
  hours = String(clock.getHours());
  minutes = String(clock.getMinutes());
  seconds = String(clock.getSeconds());

  //Check length to display 2 digits.
  hours.length < 2 ? hours = `0${hours}` : hours += "";
  minutes.length < 2 ? minutes = `0${minutes}` : minutes += "";
  seconds.length < 2 ? seconds = `0${seconds}` : seconds += "";

  //Update UI
  HOURS.innerHTML = `${hours} : `; 
  MINUTES.innerHTML = `${minutes} : `;
  SECONDS.innerHTML = seconds;
  }, 1000 );

}

showClock();