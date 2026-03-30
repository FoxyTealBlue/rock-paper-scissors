const gameButtons = document.querySelectorAll(".gameButton");

gameButtons.forEach((gameButton) =>
  gameButton.addEventListener("click", runGame),
);

function runGame(event) {
  const playerChoice = event.target.id;
  const aiChoice = getAiChoice();
  console.log(`${playerChoice} vs ${aiChoice}`);
}

function getAiChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    default:
      return "Scissors";
  }
}

function roundWinner(playerChoice, aiChoice) {}
