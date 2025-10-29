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

function playerScore(point) {
  let playerScore = playerScore + point;
  return playerScore;
}

function computerScore(point) {
  let computerScore = computerScore + point;
  return computerScore;
}

console.log(getComputerChoice(getRandomNumber(3)));

console.log(`Player choice is ${getPlayerChoice()}`);
