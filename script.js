//rock paper scissors game played by the console

//overall
    //variables
let userInput;
let userInputCount = 0;
let comInput;
let userWinsPoint = 'Congrats, you win a point!'
let comWinsPoint = 'Sorry, computer won that round!'
let userWon = 'Congrats! You Win!'
let comWon = 'Sorry, computer wins! Try again next time.'
let gameRound = 0
let userPointStatus = 0
let comPointStatus = 0
    //end variables

playTheGame();
//end overall

//block of code below to carry the rules of the game and loop how many rounds/how many points to win
function playTheGame () {
    while (gameRound <= 5) {
        if (gameRound >= 5) {
            break;
        }
        runRound();
        if (userInput === false) {
            console.log('Program terminated.');
            gameRound = 10;
            break;
        }
        checkWhoWins();
    }
    resetNums();
    userInput = 'temp';
}
//end block

//code of block to see who wins
function checkWhoWins () {
    if (gameRound >= 5) {
        console.log('Game over!')
        if (userPointStatus === comPointStatus) {
            console.log("It's a tie!! Try again?")
            return;
        } else if (userPointStatus > comPointStatus) {
            console.log(userWon)
            return;
        } else if (comPointStatus > userPointStatus) {
            console.log(comWon);
            return;
        } else {
            return;
        }
    } else if (userPointStatus >= 3) {
            console.log(userWon)
            return;
    } else if (comPointStatus >= 3) {
            console.log(comWon);
            return;
    }
}
//end block

//block of code to run a round of the game
function runRound() {
    askUser();
    if (userInput === false) {
        return;
    }
    console.log('User chose: ' + userInput);
    askCom();
    console.log('Computer chose: ' + comInput);
    gameRound++;
    if (userInput === comInput) {
        console.log("it's a tie, no points!");
    } else if (userInput === 'rock') {
        if (comInput === 'paper') {
            console.log(comWinsPoint);
            comPointStatus++;
        } else if (comInput === 'scissors') {
            console.log(userWinsPoint);
            userPointStatus++;
        }
    } else if (userInput === 'paper') {
        if (comInput === 'rock') {
            console.log(userWinsPoint);
            userPointStatus++;
        } else if (comInput === 'scissors') {
            console.log(comWinsPoint);
            comPointStatus++;
        }
    } else if (userInput === 'scissors') {
        if (comInput === 'rock') {
            console.log(comWinsPoint);
            comPointStatus++;
        } else if (comInput === 'paper') {
            console.log(userWinsPoint);
            userPointStatus++;
        }
    }
    let numOfGames = 5 - parseInt(gameRound)
    console.log('The user has ' + userPointStatus + ' points.');
    console.log('The computer has ' + comPointStatus + ' points.');
    console.log('There are ' + numOfGames + ' games left.');
    console.log(' ')
}
//end block

//block of code below to reset all of the points at the end of a game
function resetNums() {
    gameRound = 0;
    userPointStatus = 0;
    comPointStatus = 0;
}
//end block

//block of code below build the computer variable using a random number generator and assigning each value a specific option
function askCom () {
    let randomVar = Math.floor(Math.random() * 3);
    if (randomVar === 0) {
        comInput = 'rock';
    } else if (randomVar === 1) {
        comInput = 'paper';
    } else if (randomVar === 2) {
        comInput = 'scissors';
    } else {
        console.log('comInput error')
    }
}
//end block

//block of code below is the function to prompt the user for an input, checks that input, and counts down false attempts
function askUser () {
    while ((userInput != 'rock') || (userInput != 'paper') || (userInput != 'scissors')) {
        userInput = prompt('Rock, paper, or scissors?').toLowerCase();
        if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors')) {
            break;
        } else if (userInputCount >= 4) {
            console.log('Terminating program')
            userInput = false;
            break;
        } else {
            userInputCount++;
            console.log('you have ' + userInputCount + ' tries. Terminate program at 5.')
        }
    }
}
//end block