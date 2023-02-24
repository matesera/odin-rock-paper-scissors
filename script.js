// a function called getComputerChoice, that will randomly return rock paper or scissors
function getComputerChoice () {
    let options = ['Rock', 'Paper', 'Scissors'];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

// a function that plays a round of rps, playRound(playerSelection, computerSelection)
// returns!!! a string with the winner: win-lose, this beats that
// playerSelection case-insensitive, so it accepts R,r

let playerSelection = '';
let computerSelection = '';
let round;

function playRound (playerSelection, computerSelection) {

    let userChoice = prompt("Rock paper scissors shoot: ");
    playerSelection = userChoice.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    

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
    } else if (playerSelection === 'rock' & computerSelection === 'rock') {
        return "Rock on Rock! It's a tie!";
    } else if (playerSelection === 'paper' & computerSelection === 'paper') {
        return "Paper on Paper! It's a tie!";
    } else if (playerSelection === 'scissors' & computerSelection === 'scissors') {
        return "Scissors on Scissors! It's a tie!";
    } else {
        return "Try again!";
    }
}







//a function called game, plays 5 rounds, keeps the score of each and outputs them at the end of each round
//outputs the winner at the end
function game () {

    let winScore = 0;
    let loseScore = 0;
    let tieScore = 0;
    
    for (let i = 0; i < 5; i++) {
        round = playRound (playerSelection, computerSelection);
        console.log(round);
        if (round.includes("win")) {
            winScore++;
        } else if (round.includes("lose")) {
            loseScore++;
        } else if (round.includes("tie")) {
            tieScore++;
        }
    }
    
    
    if (winScore > loseScore) {
        console.log("You win! Congrats!");
    } else if (winScore < loseScore) {
        console.log("You lose! Computer wins!");
    } else if (winScore === 0) {
        console.log("Devastating loss!");
    } else if (loseScore === 0) {
        console.log("Flawless victory!");
    } else if (tieScore > winScore & loseScore) {
        console.log("It's a tie!"); 
    } else {
        console.log("Try again!");
    }
}

let test = game();
console.log(test);


