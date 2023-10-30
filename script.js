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
      return "You Lose! Paper beats Rock";
    } else if (computerSelection == "scissors") {
      return "You Win! Scissors beats Rock";
    } else {
      return "Draw!";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else if (computerSelection == "rock") {
      return "You Win! Paper beats Rock";
    } else {
      return "Draw!";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection == "paper") {
      return "You Win! Scissors beats Paper";
    } else {
      return "Draw!";
    }
  }
}



// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

