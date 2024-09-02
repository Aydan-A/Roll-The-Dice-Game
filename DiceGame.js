let nameButton = document.querySelector(".prompt");
let rollDiceButton = document.querySelector(".roll");
var scoreLabel = document.querySelector(".status");
let nameofP1 = document.querySelector(".Player1");
let nameofP2 = document.querySelector(".Player2");
let leftDice = document.querySelector(".left");
let rightDice = document.querySelector(".right");

scoreLabel.innerHTML = "Let the dice roll!";


nameButton.addEventListener("click", () => {
  player1 = prompt("What's Player1 name?");
  player2 = prompt("What's Player2 name?");
  nameofP1.innerHTML = player1;
  nameofP2.innerHTML = player2;

  rollDiceButton.addEventListener("click", () => {
   
     nameButton.remove();
    //Let the dice spin with gif
    leftDice.setAttribute("src", "./DicePics/dice-game.gif");
    rightDice.setAttribute("src", "./DicePics/dice-game.gif");
    leftDice.style.width = "120px";
    rightDice.style.width = "120px";
    rightDice.style.paddingLeft = "70vh";

    setTimeout(() => {
      let randomNumber1 = Math.floor(Math.random() * 6) + 1;
      let randomNumber2 = Math.floor(Math.random() * 6) + 1;

      leftDice.setAttribute(
        "src",
        "./DicePics/side_" + randomNumber1 + "_pips.png"
      );
      rightDice.setAttribute(
        "src",
        "./DicePics/side_" + randomNumber2 + "_pips.png"
      );

      //Find the Winner
      if (randomNumber1 == randomNumber2) {
        scoreLabel.innerHTML = "Draw!";
      } else if (randomNumber1 > randomNumber2) {
        scoreLabel.innerHTML = player1 + " Wins!";
      } else {
        scoreLabel.innerHTML = player2 + " Wins!";
      }
    }, 2500);
  });
});
