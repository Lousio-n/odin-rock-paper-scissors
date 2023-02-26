const choices = ["rock", "paper", "scissor"];

let userScore = 0;
let computerScore = 0;

function playRound() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let userChoice = prompt("Choose: rock, paper or scissor").toLowerCase();

  if (userChoice === computerChoice) {
    console.log("It's a draw.");
  } else if (userChoice === choices[0] && computerChoice === choices[2]) {
    console.log("You win!");
    userScore++;
  } else if (userChoice === choices[1] && computerChoice === choices[0]) {
    console.log("You win!");
    userScore++;
  } else if (userChoice === choices[2] && computerChoice === choices[1]) {
    console.log("You win!");
    userScore++;
  } else {
    console.log("You loose.");
    computerScore++;
  }
}
