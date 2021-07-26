const DRAW = document.querySelector("#draw");
const BUBLE = document.querySelector("#buble");
const SORT = document.querySelector("#sort");
const inputCARDS = document.querySelector("#nCards");
const cardContainer = document.querySelector("#cardContainer");
const HIDDEN = document.querySelector(".botoncicos");

const FORM = document.querySelector("#form");
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SYMBOLS = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  sendNumb();
};

const cardGenerator = num => {
  for (let u = 0; u < num; u++) {
    cardContainer.appendChild.innerHTML = "<div class='cartag'></div>";
  }
};
const cardArrayGenerator = numero => {
  let selCard = [];

  for (let i = 0; i < numero; i++) {
    selCard.push([]);
    console.log("Bucle en vuelta numero: " + i + "array:" + selCard);
    selCard[i][0] = Math.floor(Math.random() * NUMBERS.length);
    selCard[i][1] = Math.floor(Math.random() * SYMBOLS.length);
  }
  return selCard;
};

const sendNumb = () => {
  FORM.addEventListener("submit", event => {
    event.preventDefault();
    let numerovalidado = isValidNumero();
    cardGenerator(numerovalidado);
    HIDDEN.style.visibility = "visible";
  });
};

const isValidNumero = () => {
  if (inputCARDS.value.length < 10 && inputCARDS.value > 0) {
    return inputCARDS.value;
  } else {
    console.log("falloooo");
  }
};

const sortBuble = array => {
  BUBLE.addEventListener("click", () => {
    return bubbleSortARR(array);
  });
};

const sortSelect = array => {
  BUBLE.addEventListener("click", () => {
    return selectionSortARR(array);
  });
};

const selectionSortARR = inputArr => {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j][0] < inputArr[min][0]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
};

const bubbleSortARR = inputArr => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j][0] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};
