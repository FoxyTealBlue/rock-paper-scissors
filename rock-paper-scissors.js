const gameButtons = document.querySelectorAll(".gameButton");
let playerScore = 0;
let aiScore = 0;
let roundCount = 0;

gameButtons.forEach((gameButton) =>
  gameButton.addEventListener("click", runGame),
);

function runGame(event) {
  const playerChoice = event.currentTarget.id;
  const aiChoice = getAiChoice();
  hideRPSContainer();
  showVsFrame(event, aiChoice);
  const roundWinner = getRoundWinner(playerChoice, aiChoice);
  roundCount++;
  scoreKeeper(roundWinner);
  displayWinner(roundWinner);
  displayScore();
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

function showVsFrame(event, aiChoice) {
  const footer = document.querySelector("footer");

  footer.style.opacity = "1";
  footer.style.visibility = "visible";
  setVsFrame(event, aiChoice);
}

function setVsFrame(event, aiChoice) {
  const playerFrame = document.querySelector("#playerChoice");
  const aiFrame = document.querySelector("#aiChoice");
  const vsFrame = document.querySelector("#vsFrame");
  const playerImage = getComputedStyle(event.currentTarget).backgroundImage;
  const aiImage = getAiImage(aiChoice);

  vsFrame.style.backgroundImage = "url('./images/vs-letters-versus-png.png')";
  vsFrame.style.height = "262.5px";
  vsFrame.style.width = "175px";
  vsFrame.style.backgroundSize = "cover";
  vsFrame.style.backgroundPosition = "center";
  vsFrame.style.backgroundRepeat = "no-repeat";
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

function displayWinner(roundWinner) {
  const announceWinner = document.querySelector("#announceWinner");

  announceWinner.textContent =
    roundWinner === "Tie" ? "It's a Tie!" : `The Winner is: ${roundWinner}!`;
}

function displayScore() {
  const scoreHeader = document.querySelector("#scoreHeader");
  const showPlayerScore = document.querySelector("#showPlayerScore");
  const showAiScore = document.querySelector("#showAiScore");

  scoreHeader.textContent = "Score";
  showPlayerScore.textContent = `Player: ${playerScore}`;
  showAiScore.textContent = `AI: ${aiScore}`;
}

function hideRPSContainer() {
  const rpsContainer = document.querySelector("#rps-container");

  rpsContainer.style.opacity = "0";
  rpsContainer.style.visibility = "hidden";
  rpsContainer.addEventListener("transitionend", function handler() {
    rpsContainer.style.display = "none";
    rpsContainer.removeEventListener("transitionend", handler);
  });
}
