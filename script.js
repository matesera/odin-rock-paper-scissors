// a function called getComputerChoice, that will randomly return rock paper or scissors
function getComputerChoice () {
    let options = ['Rock', 'Paper', 'Scissors'];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

// a function that plays a round of rps, playRound(playerSelection, computerSelection)
// returns!!! a string with the winner: win-lose, this beats that
// playerSelection case-insensitive, so it accepts R,r

//a function called game, plays 5 rounds, keeps the score of each and outputs them at the end of each round
//outputs the winner at the end
