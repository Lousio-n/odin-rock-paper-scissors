const choices = ["rock", "paper", "scissor"];

let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let userChoice;

const gameButtonContainer = document.querySelector('.gameButtonContainer');
const scoreContainer = document.querySelector('.scoreContainer')
const gameScoreUser = document.querySelector('.userScore');
const gameScoreComputer = document.querySelector('.computerScore');
const gameResult = document.querySelector('.gameResult');
const rock = document.querySelector('.buttonRock');
const paper = document.querySelector('.buttonPaper');
const scissor = document.querySelector('.buttonScissor');

const resetGame = () => {
  window.location.reload();
}

rock.addEventListener('click', () => {
  playRound(choices[0]);
})

paper.addEventListener('click', () => {
  playRound(choices[1]);
})

scissor.addEventListener('click', () => {
  playRound(choices[2]);
})

function playRound(userChoice) {
  let computerChoice =
    choices[Math.floor(Math.random() * choices.length)];
  if (userChoice === computerChoice) {
    gameResult.textContent = "It's a draw";
  } else if (
    userChoice === choices[0] &&
    computerChoice === choices[2]
  ) {
    gameResult.textContent = "You win!";
    userScore++;
  } else if (
    userChoice === choices[1] &&
    computerChoice === choices[0]
  ) {
    gameResult.textContent = "You win!";
    userScore++;
  } else if (
    userChoice === choices[2] &&
    computerChoice === choices[1]
  ) {
    gameResult.textContent = "You win!";
    userScore++;
  } else {
    gameResult.textContent = "You loose";
    computerScore++;
  }
  gameScoreUser.textContent = `Your score is: ${userScore}`;
  gameScoreComputer.textContent = `The computers score is: ${computerScore}`;

  if (userScore == 5) {
    displayWinner("User");
  } else if (computerScore == 5) {
    displayWinner("Computer");
  }
}

function displayWinner(winner) {
  const infoText = document.querySelector('.infoText');
  const resetButton = document.createElement('button');

  resetButton.classList.add('buttonReplay');
  resetButton.textContent = 'Reset';

  infoText.textContent = `${winner} won the game!`;

  scoreContainer.replaceChildren();
  gameButtonContainer.replaceChildren();
  gameButtonContainer.appendChild(resetButton);

  resetButton.addEventListener('click', () => {
    resetGame();
  })
}