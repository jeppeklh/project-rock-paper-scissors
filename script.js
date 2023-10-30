let playerPoints = 0;
let pcPoints = 0;

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
      return "You Lose! Paper beats Rock";
    } else if (computerSelection == "scissors") {
      return "You Win! Rock beats Scissors";
      playPoints++;
    } else {
      return "Draw!";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      pcPoints++;
      return "You Lose! Scissors beats Paper";
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
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection == "paper") {
      playerPoints++;
      return "You Win! Scissors beats Paper";
    } else {
      return "Draw!";
    }
  }
}

function game() {
  playerPoints = 0;
  pcPoints = 0;
  let roundNumber = 1;

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Round: " + roundNumber + " Rock, Paper, Scissors?");
    let pcChoice = getComputerChoice();
    console.log("Round: " + roundNumber);
    console.log("Player: " + playerChoice + " vs " + "PC: " + pcChoice);
    console.log(playRound(playerChoice, pcChoice));
    console.log("");

    roundNumber++;
  }

  console.log("Player: " + playerPoints + " PC: " + pcPoints);
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
