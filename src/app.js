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

for (let i of pronoun) {
  for (let j of adj) {
    for (let k of noun) {
      //console.log(i + j + k + ".com");
      console.log(`${i}${j}${k}.com`);
      document.write(`${i}${j}${k}.com<br>`);
    }
  }
}
//for (let j of adj)
//for (let k of noun)
