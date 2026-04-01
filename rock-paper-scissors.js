const gameButtons = document.querySelectorAll(".gameButton");
let playerScore = 0;
let aiScore = 0;

gameButtons.forEach((gameButton) =>
  gameButton.addEventListener("click", runGame),
);

function runGame(event) {
  const playerChoice = event.target.id;
  const aiChoice = getAiChoice();
  setVsFrame(event, aiChoice);
  const roundWinner = getRoundWinner(playerChoice, aiChoice);
  scoreKeeper(roundWinner);
  console.log(`Player Score: ${playerScore}`);
  console.log(`AI Score: ${aiScore}`);
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

function getRoundWinner(playerChoice, aiChoice) {
  if (playerChoice === "rock") {
    switch (aiChoice) {
      case "Rock":
        return "Tie";
      case "Paper":
        return "AI";
      case "Scissors":
        return "Player";
    }
  }
  if (playerChoice === "paper") {
    switch (aiChoice) {
      case "Rock":
        return "Player";
      case "Paper":
        return "Tie";
      case "Scissors":
        return "AI";
    }
  }
  if (playerChoice === "scissors") {
    switch (aiChoice) {
      case "Rock":
        return "AI";
      case "Paper":
        return "Player";
      case "Scissors":
        return "Tie";
    }
  }
}

function scoreKeeper(roundWinner) {
  if (roundWinner === "Tie") {
    return;
  }
  return roundWinner === "Player" ? playerScore++ : aiScore++;
}

function setVsFrame(event, aiChoice) {
  const playerFrame = document.querySelector("#playerChoice");
  const aiFrame = document.querySelector("#aiChoice");
  const playerImage = getComputedStyle(event.currentTarget).backgroundImage;
  const aiImage = getAiImage(aiChoice);

  playerFrame.style.height = "494px";
  playerFrame.style.width = "360px";
  playerFrame.style.backgroundImage = playerImage;
  playerFrame.style.backgroundSize = "cover";
  playerFrame.style.backgroundPosition = "center";
  playerFrame.style.backgroundRepeat = "no-repeat";
  aiFrame.style.height = "494px";
  aiFrame.style.width = "360px";
  aiFrame.style.backgroundImage = `url("${aiImage}")`;
  aiFrame.style.backgroundSize = "cover";
  aiFrame.style.backgroundPosition = "center";
  aiFrame.style.backgroundRepeat = "no-repeat";
}

function getAiImage(aiChoice) {
  if (aiChoice === "Rock") {
    return "./images/the-rock.webp";
  }
  if (aiChoice === "Paper") {
    return "./images/toilet-paper-man.png";
  }
  if (aiChoice === "Scissors") {
    return "./images/brooding-scissors.png";
  }
}
