let computerScore = 0;
let playerScore = 0;

const play5gameround = document.getElementById('playGame');
play5gameround.addEventListener('click', game);
let playerChoice = document.querySelectorAll('input[type=radio]');
let containerResult = document.getElementById('result-container');
// const submitSelection = document.getElementById('submitButton');
// submitSelection.addEventListener('click', playerPlay);

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

function playerPlay(){
    for(let i = 0; i < playerChoice.length; i++){
            if(playerChoice[i].checked === true){
                // if the playerSelection is checked.
                // console.log the name of the one that is checked.
                console.log(playerChoice[i].value);
                return playerChoice[i].value;
            }
        }
    }

// function playRound(playerSelection, computerSelection){
// if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
//     if(playerSelection === 'rock' && computerSelection === 'scissors'){
//         return `Congrats, ${playerSelection} beats computer choosing ${computerSelection}`
//         }
//     if(playerSelection === 'scissors' && computerSelection === 'rock'){
//             return `Sorry, computer chose ${computerSelection} and it beats ${playerSelection}`
//         }
//     if(playerSelection === 'scissors' && computerSelection === 'paper'){
//             return `Congrats, ${playerSelection} beats computer choosing ${computerSelection}`
//         }
//     if(playerSelection === 'paper' && computerSelection === 'scissors'){
//             return `Sorry, computer chose ${computerSelection} and it beats ${playerSelection}`
//         }
//     if(playerSelection === 'paper' && computerSelection === 'rock'){
//             return `Congrats, ${playerSelection} beats computer choosing ${computerSelection}`
//         }
//     if(playerSelection === 'rock' && computerSelection === 'paper'){
//             return `Sorry, computer chose ${computerSelection} and it beats ${playerSelection}`
//         }
//     if(playerSelection === computerSelection){
//         return `it's a tie! ${playerSelection} matches ${computerSelection}`
//         }
//     }else {
//     console.log('please enter rock paper or scissors');
//     break;
//     }
// }

function game(){

        // let playerPromptAnswer = prompt('Rock, Paper or Scissors?')
        // let playerSelection = playerPromptAnswer.toLowerCase();

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();


        if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
            if(playerSelection === 'rock' && computerSelection === 'scissors'){
                console.log(`Congrats, ${playerSelection} beats Computer choosing ${computerSelection}`)
                let playerWinnerR = `Congrats, ${playerSelection} beats Computer choosing ${computerSelection}`;
                playerScore++;
                return showResult(playerWinnerR);
                }
            if(playerSelection === 'scissors' && computerSelection === 'rock'){
                console.log(`Sorry, Computer chose ${computerSelection} and it beats ${playerSelection}`)
                let computerWinnerR = `Sorry, Computer chose ${computerSelection} and it beats ${playerSelection}`;
                computerScore++;
                return showResult(computerWinnerR);
                }
            if(playerSelection === 'scissors' && computerSelection === 'paper'){
                console.log(`Congrats, ${playerSelection} beats Computer choosing ${computerSelection}`)
                let playerWinnerS = `Congrats, ${playerSelection} beats Computer choosing ${computerSelection}`;
                playerScore++;
                return showResult(playerWinnerS);
                }
            if(playerSelection === 'paper' && computerSelection === 'scissors'){
                console.log(`Sorry, Computer chose ${computerSelection} and it beats ${playerSelection}`)
                let computerWinnerS = `Sorry, Computer chose ${computerSelection} and it beats ${playerSelection}`;
                computerScore++;
                return showResult(computerWinnerS);
                }
            if(playerSelection === 'paper' && computerSelection === 'rock'){
                console.log(`Congrats, ${playerSelection} beats Computer choosing ${computerSelection}`)
                let playerWinnerP = `Congrats, ${playerSelection} beats Computer choosing ${computerSelection}`;
                playerScore++;
                return showResult(playerWinnerP);
                }
            if(playerSelection === 'rock' && computerSelection === 'paper'){
                console.log(`Sorry, Computer chose ${computerSelection} and it beats ${playerSelection}`)
                let computerWinnerP = `Sorry, Computer chose ${computerSelection} and it beats ${playerSelection}`;
                computerScore++;
                return showResult(computerWinnerP);
                }
            if(playerSelection === computerSelection){
                console.log(`it's a tie! ${playerSelection} matches ${computerSelection}`)
                let tie = `it's a tie! ${playerSelection} matches ${computerSelection}`;
                return showResult(tie);
                }
            } //else {
            // console.log('please enter rock paper or scissors');
            // }

    // return finalScore()
}

function showResult(winner){
    let createResult = document.createElement('p');
    containerResult.appendChild(createResult);
    createResult.innerText = winner;

    if(computerScore === 3){
        containerResult.innerText = "";
        containerResult.appendChild(createResult)
        createResult.innerText = `The Computer has won out of 5. Computer Score:${computerScore} Player Score:${playerScore}`;
        computerScore = 0;
        playerScore = 0;
    }

    if(playerScore === 3){
        containerResult.innerText = "";
        containerResult.appendChild(createResult)
        createResult.innerText = `Congrats you won! Player Score:${playerScore} Computer Score:${computerScore}`;
        computerScore = 0;
        playerScore = 0;
    }

}

// function finalScore(){
//     if(computerScore < playerScore){
//         console.log('Well done on getting the most points out of the 5 game round against the Computer')
//         console.log(`Your score ${playerScore} and the Computer's score ${computerScore}`)
//     } else if(playerScore < computerScore){
//         console.log('Sorry the Computer won the most points out of the 5 game round')
//         console.log(`Your score ${playerScore} and the Computer's score ${computerScore}`)
//     } else{
//         console.log(`it's a tie, your score ${playerScore} and the Computer's score ${computerScore}`)
//     }
// }
