let httpRequest;

if (window.XMLHttpRequest) {//Real world
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {//MicroThieves
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.onreadystatechange = function () {
  if (httpRequest.readyState == 4) {
    document.write(`<p>Respuesta recibida.</p>`);
    console.log("0");
  }
  else {
    document.write(`<p>Procesando</p>`);
    console.log("1");
  }
}

httpRequest.open("GET", "https://www.itpm.com/", true);
httpRequest.send();
