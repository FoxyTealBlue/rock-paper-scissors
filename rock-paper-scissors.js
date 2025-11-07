const startButton = document.body.querySelector("#startGame");
const winnerDisplay = document.body.querySelector("#winnerDisplay");
const showScore = document.body.querySelector("#showScore");

startButton.addEventListener("click", () => playGame());

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
        return null;
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

function getWinner(playerScore, computerScore) {
  if (playerScore === computerScore) return "Tie";
  return playerScore > computerScore ? "Player" : "Computer";
}

function displayWinner(winner) {
  switch (winner) {
    case "Player":
      winnerDisplay.innerHTML = "The player won.";
      break;
    case "Computer":
      winnerDisplay.innerHTML = "The computer won.";
      break;
    case "Tie":
      winnerDisplay.innerHTML = "Neither, it was a tie.";
      break;
  }
}

function playGame() {
  winnerDisplay.innerHTML = "";
  showScore.innerHTML = "";

  let playerScore = 0;
  let computerScore = 0;
  let rounds = 0;
  while (rounds < 5) {
    let playerSelection = getPlayerChoice();
    if (playerSelection === null) break;
    let computerSelection = getComputerChoice(getRandomNumber(3));
    let winner = decideWinner(playerSelection, computerSelection);
    if (winner === "Player") {
      playerScore = updatePlayerScore(playerScore);
    } else if (winner === "Computer") {
      computerScore = updateComputerScore(computerScore);
    }
    rounds++;
  }
  showScore.innerHTML = `The final score is Player: ${playerScore} to Computer: ${computerScore}.`;
  displayWinner(getWinner(playerScore, computerScore));
}
