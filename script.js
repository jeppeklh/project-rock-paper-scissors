let playerPoints = 0;
let pcPoints = 0;
let roundNumber = 1;

function getComputerChoice() {
  const x = Math.floor(Math.random() * 3) + 1;
  let choice = "";
  if (x === 1) {
    choice = "rock";
  } else if (x === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      pcPoints++;
      return "You Lose! Paper is beaten by Rock";
    } else if (computerSelection == "scissors") {
      playerPoints++;
      return "You Win! Rock beats Scissors";
      
    } else {
      return "Draw!";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      pcPoints++;
      return "You Lose! Scissors is beaten by Paper";
    } else if (computerSelection == "rock") {
      playerPoints++;
      return "You Win! Paper beats Rock";
    } else {
      return "Draw!";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      pcPoints++;
      return "You Lose! Rock is beaten by Scissors";
    } else if (computerSelection == "paper") {
      playerPoints++;
      return "You Win! Scissors beats Paper";
    } else {
      return "Draw!";
    }
  }
}

const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissors = document.querySelector(".btnScissors");
const scoreDisplay = document.querySelector(".results");

addChoiceToButton(btnRock, "rock");
addChoiceToButton(btnPaper, "paper");
addChoiceToButton(btnScissors, "scissors");

function game(choice) {
  let pcChoice = getComputerChoice();
  

  scoreDisplay.innerHTML = "Round: " + roundNumber + "<br>" //line break
   + "Player: " + choice + " vs " + "PC: " + pcChoice + "<br>" 
   + playRound(choice, pcChoice) + "<br>"
   + "<br>"
   + "Player: " + playerPoints + " PC: " + pcPoints;
   roundNumber++;

   //if player win reset game
   if(playerPoints === 5) {
    scoreDisplay.innerHTML += "<br>" + "You Won!";
    resetGame();
   }
   //if pc wins reset game
   if(pcPoints === 5) {
    scoreDisplay.innerHTML += "<br>" + "You Lost!";
    resetGame();
   }
}

//Runs a game of rpc with respective choice on button press
function addChoiceToButton(button, choice) {
  button.addEventListener("click", () => {
    game(choice);
  });
}

function resetGame() {
  roundNumber =1;
  pcPoints = 0;
  playerPoints = 0;
}
