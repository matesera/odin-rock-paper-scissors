// a function called getComputerChoice, that will randomly return rock paper or scissors
function getComputerChoice () {
    let options = ['Rock', 'Paper', 'Scissors'];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

// a function that plays a round of rps, playRound(playerSelection, computerSelection)
// returns!!! a string with the winner: win-lose, this beats that
// playerSelection case-insensitive, so it accepts R,r
function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' & computerSelection === 'paper') {
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === 'paper' & computerSelection === 'scissors') {
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection === 'scissors' & computerSelection === 'rock') {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === 'rock' & computerSelection === 'scissors') {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === 'paper' & computerSelection === 'rock') {
        return "You win! Paper beats Rock!";
    } else if (playerSelection === 'scissors' & computerSelection === 'paper') {
        return "You win! Scissors beats Paper!";
    } else {
        return "Try again!";
    }
}

let userChoice = prompt("Rock paper scissors shoot: ");
let playerSelection = userChoice.toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();






//a function called game, plays 5 rounds, keeps the score of each and outputs them at the end of each round
//outputs the winner at the end
