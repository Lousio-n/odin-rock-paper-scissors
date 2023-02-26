const computerChoices = ["rock", "paper", "scissor"];

let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let userChoice;

const gameScoreUser = document.querySelector(".userScore");
const gameScoreComputer = document.querySelector(".computerScore");
const gameResult = document.querySelector(".gameResult");

function playRound(userChoice) {
  let computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  if (userChoice === computerChoice) {
    gameResult.textContent = "It's a draw";
  } else if (
    userChoice === computerChoices[0] &&
    computerChoice === computerChoices[2]
  ) {
    gameResult.textContent = "You win!";
    userScore++;
  } else if (
    userChoice === computerChoices[1] &&
    computerChoice === computerChoices[0]
  ) {
    gameResult.textContent = "You win!";
    userScore++;
  } else if (
    userChoice === computerChoices[2] &&
    computerChoice === computerChoices[1]
  ) {
    gameResult.textContent = "You win!";
    userScore++;
  } else {
    gameResult.textContent = "You loose";
    computerScore++;
  }
  gameScoreUser.textContent = `Your score is: ${userScore}`;
  gameScoreComputer.textContent = `The computers score is: ${computerScore}`;
  roundsPlayed++;
}
