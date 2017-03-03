

var title = document.getElementById("form-signin-heading");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var remember = document.getElementsByTagName("span")[0];
var button = document.getElementsByClassName("btn")[0];

var imprime = document.getElementById("mostrar");

function translate(){
title.innerHTML = "Inicia sesión";
email.placeholder = "correo electrónico";
password.placeholder = "introduce contraseña";
remember.innerHTML = "recordar datos";
button.innerHTML = "iniciar sesión";


}
translate();

function mostrar(event){
  event.preventDefault();
  imprime.innerHTML = "<br>"+ "su e-mail es: " + email.value + "<br>" + "<br>" + "su contraseña ingresada es : " + password.value;

}
