const numberArray = [
  "31",
  "32",
  "41",
  "42",
  "43",
  "51",
  "52",
  "53",
  "54",
  "61",
  "62",
  "63",
  "64",
  "65",
  "11",
  "22",
  "33",
  "44",
  "55",
  "66",
  "21"
];

class Game {
  constructor() {
    this.prevTurnAnswer = 0;
    this.currTurnAnswer = 0;
    this.currRandomNum = 0;
  }
  rollDice() {
    this.prevTurnAnswer = this.currTurnAnswer;
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach(die => {
      this.toggleClasses(die);
      this.diceNum = this.getRandomNumber(1, 6);
      die.dataset.roll = this.diceNum;
    });
    this.diceNum1 = document.getElementById("die-1").dataset.roll;
    this.diceNum2 = document.getElementById("die-2").dataset.roll;

    if (this.diceNum1 < this.diceNum2) {
      return (this.currRandomNum = `${this.diceNum2}` + this.diceNum1);
    } else {
      return (this.currRandomNum = `${this.diceNum1}` + this.diceNum2);
    }
  }

  toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  submitNumber() {
    let submitNum = document.getElementById("number").value;
    if (
      numberArray.indexOf(submitNum) <= numberArray.indexOf(this.prevTurnAnswer)
    ) {
      alert("Choose a higer number");
    } else if (numberArray.includes(submitNum)) {
      this.currTurnAnswer = submitNum;
      this.hiddenFunc("dice");
      this.hiddenFunc("buttonPreLie");
      this.hiddenFunc("lineOR");
      this.hiddenFunc("buttonNewTurn");
      this.hiddenFunc("form");
    } else {
      alert("wrong nummer - try again");
    }
  }

  hiddenFunc(elementID) {
    var hiddenState = document.getElementById(elementID);
    if (hiddenState.style.visibility === "visible") {
      hiddenState.style.visibility = "hidden";
    } else {
      hiddenState.style.visibility = "visible";
    }
  }

  previousLies() {
    if (this.currRandomNum === this.currTurnAnswer) {
      this.hiddenFunc("decisionYouDrink");
      document.getElementById("lyingFrameText").innerHTML =
        "You don´t trust your friend! <br> Shame on you - take a drink";
      console.log("Previous player isn´t lieing - you drink");
    } else {
      this.hiddenFunc("decisionPrevDrink");
      document.getElementById("lyingFrameText").innerHTML =
        "Yes you are right!<br> Take a drink, mate";
      console.log("Previous player is lieing - your mate is drinking");
    }
  }
}

//DOM
let gameStart = new Game();

document.getElementById("buttonNewTurn").addEventListener("click", () => {
  gameStart.hiddenFunc("dice");
  gameStart.hiddenFunc("buttonPreLie");
  gameStart.hiddenFunc("lineOR");
  gameStart.hiddenFunc("buttonNewTurn");
  gameStart.hiddenFunc("form");
  gameStart.rollDice();
  if (gameStart.currRandomNum === "21") {
    setTimeout(function() {
      alert("MÄXCHEN - everyone except of you take a drink!!!");
    }, 1600);
  }
  console.log(`Random Number after dicing:${gameStart.currRandomNum}`);
  console.log(`Previous submit Number in safe:${gameStart.prevTurnAnswer}`);
});

form.onsubmit = e => {
  gameStart.submitNumber();
  console.log(`Current Submit Answer ${gameStart.currTurnAnswer}`);
  document.getElementById("beercoasterNumber").innerHTML = `${
    gameStart.currTurnAnswer
  }`;
  e.preventDefault();
};

document.getElementById("buttonPreLie").addEventListener("click", () => {
  gameStart.hiddenFunc("lyingFrame");
  setTimeout(function() {
    gameStart.previousLies();
  }, 2000);
  setTimeout(function() {
    gameStart.hiddenFunc("lyingFrameButton");
  }, 4000);
});
