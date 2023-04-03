// a function called getComputerChoice, that will randomly return rock paper or scissors
function getComputerChoice () {
    let options = ['Rock', 'Paper', 'Scissors'];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}


let playerSelection = '';
let computerSelection = '';
let round;
let winScore = 0;
let loseScore = 0;

// a function that plays a round of rps, playRound(playerSelection, computerSelection)
// returns!!! a string with the winner: win-lose, this beats that
// playerSelection case-insensitive, so it accepts R,r

function playRound (playerSelection, computerSelection) {

    if (playerSelection === 'rock' & computerSelection === 'paper') {
        loseScore++;
        const p = document.createElement('p');
        p.textContent = "You lose! Paper beats Rock!";  
        scoreDiv.append(p);  
    } else if (playerSelection === 'paper' & computerSelection === 'scissors') {
        loseScore++;
        const p = document.createElement('p');
        p.textContent = "You lose! Scissors beats Paper!"; 
        scoreDiv.append(p);   
    } else if (playerSelection === 'scissors' & computerSelection === 'rock') {
        loseScore++;
        const p = document.createElement('p');
        p.textContent = "You lose! Rock beats Scissors!"; 
        scoreDiv.append(p);  
    } else if (playerSelection === 'rock' & computerSelection === 'scissors') {
        winScore++;
        const p = document.createElement('p');
        p.textContent = "You win! Rock beats Scissors!"; 
        scoreDiv.append(p);  
    } else if (playerSelection === 'paper' & computerSelection === 'rock') {
        winScore++;
        const p = document.createElement('p');
        p.textContent = "You win! Paper beats Rock!";
        scoreDiv.append(p);
    } else if (playerSelection === 'scissors' & computerSelection === 'paper') {
        winScore++;
        const p = document.createElement('p');
        p.textContent = "You win! Scissors beats Paper!";
        scoreDiv.append(p);
    } else if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        p.textContent = `${playerSelection} vs ${computerSelection} it's a tie!`;
        scoreDiv.append(p);
    } else {
        const p = document.createElement('p');
        p.textContent = "Try again!";
        scoreDiv.append(p);
    } 
}

// should add the playRound function in the event listener to initialize the function, and pass the clicked value??
// so if i click whichever button, that starts the playRound function with the value of the clicked button as playerSelection

const rockBtn = document.querySelector('.rock-btn');
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice().toLowerCase();

    playRound(playerSelection, computerSelection);

    keepScore();

    declareWinner();
     
}); 

const paperBtn = document.querySelector('.paper-btn');
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice().toLowerCase();

    playRound(playerSelection, computerSelection);

    keepScore();

    declareWinner();

}); 


const scissorsBtn = document.querySelector('.scissors-btn');
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice().toLowerCase();

    playRound(playerSelection, computerSelection);

    keepScore();

    declareWinner();

});

//select the score div, after each round, add the score into it
const scoreDiv = document.querySelector('.score-div');
const playerScore = document.querySelector('.player-score');
playerScore.textContent = "Player Score: 0";
const computerScore = document.querySelector('.computer-score');
computerScore.textContent = "Computer Score: 0";

function keepScore() {
    
    playerScore.textContent = `Player Score: ${winScore}`;
    computerScore.textContent = `Computer Score: ${loseScore}`;
}

function declareWinner() {

    if (winScore === 5) {
        const h2 = document.createElement('h2');
        h2.textContent = "You beat the computer!"
        scoreDiv.append(h2);
    } else if ( loseScore === 5) {
        const h2 = document.createElement('h2');
        h2.textContent = "You got beaten by the computer!";
        scoreDiv.append(h2);
    }
}


//a function called game, plays 5 rounds, keeps the score of each and outputs them at the end of each round
//outputs the winner at the end
/*function game () {

    for (let i = 0; i < 5; i++) {
        keepScore();
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
} */




