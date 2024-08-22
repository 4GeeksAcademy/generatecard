/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function random(lista) {
    let randomNum = Math.floor(Math.random() * lista.length);
    return lista[randomNum];
  }
  let symbol = ["♦︎", "♥︎", "♣︎", "♠︎"];
  let number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let symbolElement = document.querySelector("#symbols");
  let numberCardelement = document.querySelector("#cardnum");
  let symbolCardlow = document.querySelector("#symbolsLow");
  symbolCardlow.style.transform = "rotate(180deg)";

  const renderNewRandomCard = () => {
    let symbolCard = random(symbol);
    let numberCard = random(number);

    symbolElement.innerHTML = symbolCard;
    numberCardelement.innerHTML = numberCard;
    symbolCardlow.innerHTML = symbolCard;

    if (symbolCard == "♥︎" || symbolCard == "♦︎") {
      symbolElement.style.color = "red";
      symbolCardlow.style.color = "red";
    } else {
      symbolElement.style.color = "black";
      symbolCardlow.style.color = "black";
    }
  };
  renderNewRandomCard();

  let generateRandombtn = document.querySelector("#generate-button");

  generateRandombtn.addEventListener("click", renderNewRandomCard);
};
