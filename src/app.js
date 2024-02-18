/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
let pronoun = ["La", "Nuestra"];
let adj = ["super", "gran"];
let noun = ["pagina", "bestia"];
//};

function dominios(datos) {
  return datos[Math.floor(Math.random() * datos.length)];
}
for (let i = 0; i < 10; i++) {
  document.write(
    `${dominios(pronoun)}${dominios(adj)}${dominios(noun)}.com<br>`
  );
  console.log(`${dominios(pronoun)}${dominios(adj)}${dominios(noun)}.com`);
}
