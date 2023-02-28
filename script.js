const choices = ["rock", "paper", "scissor"];

let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let userChoice;

const gameScoreUser = document.querySelector(".userScore");
const gameScoreComputer = document.querySelector(".computerScore");
const gameResult = document.querySelector(".gameResult");
const rock = document.querySelector('.buttonRock');
const paper = document.querySelector('.buttonPaper');
const scissor = document.querySelector('.buttonScissor');

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
  roundsPlayed++;
}