function getRandomNumber(parameter) {
  return Math.floor(Math.random() * parameter);
}

function getComputerChoice(number) {
  switch (number) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getPlayerChoice() {
  let isValidInput = false;

  while (!isValidInput) {
    let choice = prompt(
      "Please choose Rock, Paper, or Scissors",
    )?.toLowerCase();
    console.log(choice);
    switch (choice) {
      case "rock":
        isValidInput = true;
        return "Rock";
      case "paper":
        isValidInput = true;
        return "Paper";
      case "scissors":
        isValidInput = true;
        return "Scissors";
      case undefined:
        isValidInput = true;
        break;
      default:
        alert("Incorrect response.  Please try again.");
    }
  }
}

function updatePlayerScore(playerScore) {
  return ++playerScore;
}

function updateComputerScore(computerScore) {
  return ++computerScore;
}

function decideWinner(playerDecision, computerDecision) {
  if (playerDecision === "Rock") {
    if (computerDecision === "Rock") {
      return "Tie";
    } else if (computerDecision === "Paper") {
      return "Computer";
    } else if (computerDecision === "Scissors") {
      return "Player";
    }
  } else if (playerDecision === "Paper") {
    if (computerDecision === "Rock") {
      return "Player";
    } else if (computerDecision === "Paper") {
      return "Tie";
    } else if (computerDecision === "Scissors") {
      return "Computer";
    }
  } else if (playerDecision === "Scissors") {
    if (computerDecision === "Rock") {
      return "Computer";
    } else if (computerDecision === "Paper") {
      return "Player";
    } else if (computerDecision === "Scissors") {
      return "Tie";
    }
  }
}

function assignPoint(winner) {
  switch (winner) {
    case "Player":
      return updatePlayerScore(playerScore);
    case "Computer":
      return updateComputerScore(computerScore);
    case "Tie":
      break;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 0;
  while (rounds < 5) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice(getRandomNumber(3));
    console.log(`${playerSelection} vs ${computerSelection}`);
    let winner = decideWinner(playerSelection, computerSelection);
    console.log(winner);
    if (winner === "Player") {
      playerScore = updatePlayerScore(playerScore);
    } else if (winner === "Computer") {
      computerScore = updateComputerScore(computerScore);
    }
    rounds++;
  }
  console.log(playerScore, computerScore);
}
