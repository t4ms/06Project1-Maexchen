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
    this.diceNum1 = 1 + Math.floor(6 * Math.random());
    this.diceNum2 = 1 + Math.floor(6 * Math.random());
    if (this.diceNum1 < this.diceNum2) {
      return (this.currRandomNum = `${this.diceNum2}` + this.diceNum1);
    } else {
      return (this.currRandomNum = `${this.diceNum1}` + this.diceNum2);
    }
  }

  submitNumber() {
    let submitNum = document.getElementById("number").value;
    if (
      numberArray.indexOf(submitNum) <= numberArray.indexOf(this.prevTurnAnswer)
    ) {
      alert("Choose a higer number");
    } else if (numberArray.includes(submitNum)) {
      this.currTurnAnswer = submitNum;
    } else {
      alert("wrong nummer - try again");
    }
  }

  newTurn() {
    this.prevTurnAnswer = this.currTurnAnswer;
  }

  previousLies() {
    if (this.currRandomNum === this.currTurnAnswer) {
      console.log("Previous player isn´t lieing - you drink");
    } else {
      console.log("Previous player is lieing - your mate is drinking");
    }
  }
}

//DOM
let gameMaier = new Game();

document.getElementById("buttonNewTurn").addEventListener("click", () => {
  gameMaier.newTurn();
  gameMaier.rollDice();
  if (gameMaier.currRandomNum === "21") {
    alert("MÄXCHEN - everyone except of you take a drink!!!");
  }
  console.log(`Random Number after dicing:${gameMaier.currRandomNum}`);
  console.log(`Previous submit Number in safe:${gameMaier.prevTurnAnswer}`);
});

form.onsubmit = e => {
  gameMaier.submitNumber();
  console.log(`Current Submit Answer${gameMaier.currTurnAnswer}`);
  e.preventDefault();
};

document.getElementById("buttonPreLie").addEventListener("click", () => {
  gameMaier.previousLies();
});
