function computerPlay(){
    //Pick random 3 numbers
    let randNum = Math.floor(Math.random() * 3);
    //if that number is 0 choose Rock
    if (randNum === 0){
        return 'rock';
    }
    //if that number is 1 choose scissors
    if(randNum === 1){
        return 'scissors';
    }
    //if that number is 2 choose paper
    if(randNum === 2){
        return 'paper';
    }
}

let playerPromptAnswer = prompt('Rock, Paper or Scissors?')
let playerSelection = playerPromptAnswer.toLowerCase();
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection);
    //Prompt user to type in rock, paper or scissor.
    //make it case-insensitvie what the user types in.
    //make sure users only type in variations of rock, paper
    //or scissors.
    //This will be playerSelection value
    //Get return value of computerPlay and bring it
    //into this function.
    //This will be computer Selection value

    //Put the rules of rock paper scissors in if statements.
    //return a string that declares the winner
if(playerSelection !== 'rock' || 'paper' || 'scissors'){
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return `Congrats, ${playerSelection} beats ${computerSelection}`
        }
    }
}