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

// function playRound(playerSelection, computerSelection){
// if(playerSelection === 'rock' || 'paper' || 'scissors'){
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
//     }
// if(playerSelection !== 'rock' || 'paper' || 'scissors'){
//     console.log('please enter rock paper or scissors');
//     }
// }

let computerScore = 0;
let playerScore = 0;


function game(){
    computerScore = 0;
    playerScore = 0;

    for(let i = 0; i < 5; i++){

        let playerPromptAnswer = prompt('Rock, Paper or Scissors?')
        let playerSelection = playerPromptAnswer.toLowerCase();
        let computerSelection = computerPlay();


        if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
            if(playerSelection === 'rock' && computerSelection === 'scissors'){
                console.log(`Congrats, ${playerSelection} beats Computer choosing ${computerSelection}`)
                playerScore++;
                }
            if(playerSelection === 'scissors' && computerSelection === 'rock'){
                    console.log(`Sorry, Computer chose ${computerSelection} and it beats ${playerSelection}`)
                computerScore++;
                }
            if(playerSelection === 'scissors' && computerSelection === 'paper'){
                    console.log(`Congrats, ${playerSelection} beats Computer choosing ${computerSelection}`)
                playerScore++;
                }
            if(playerSelection === 'paper' && computerSelection === 'scissors'){
                    console.log(`Sorry, Computer chose ${computerSelection} and it beats ${playerSelection}`)
                computerScore++;
                }
            if(playerSelection === 'paper' && computerSelection === 'rock'){
                    console.log(`Congrats, ${playerSelection} beats Computer choosing ${computerSelection}`)
                playerScore++;
                }
            if(playerSelection === 'rock' && computerSelection === 'paper'){
                    console.log(`Sorry, Computer chose ${computerSelection} and it beats ${playerSelection}`)
                computerScore++;
                }
            if(playerSelection === computerSelection){
                console.log(`it's a tie! ${playerSelection} matches ${computerSelection}`)
                }
            } else {
            console.log('please enter rock paper or scissors');
            break;
            }
    }

    return finalScore()
}

function finalScore(){
    if(computerScore < playerScore){
        console.log('Well done on getting the most points out of the 5 game round against the Computer')
        console.log(`Your score ${playerScore} and the Computer's score ${computerScore}`)
    } else if(playerScore < computerScore){
        console.log('Sorry the Computer won the most points out of the 5 game round')
        console.log(`Your score ${playerScore} and the Computer's score ${computerScore}`)
    } else{
        console.log(`it's a tie, your score ${playerScore} and the Computer's score ${computerScore}`)
    }
}