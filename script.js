//rock paper scissors game played by the console


//ask the user for an input to be rock, paper, or scissors
//  turn that input to all lower case
//  check that input against rock, paper and scissors
//      if false, ask for a correct input
//      else nothing

//generate an automatic computer entry for rock, paper, or scissors
//  generate a random 0-2
//  if 0, then rock
//  if 1, then paper
//  if 2, then scissors
//  else fault

//create a function to run a game of rock paper scissors, taking two inputs
//  if userInput === comInput, output tie
//  if userInput === rock,
//      if comInput === scissors, output player wins!
//      or if comInput === paper, output computer wins
//  if userInput === paper,
//      if comInput === rock, output player wins!
//      or if comInput === scissors, output computer wins
//  if userInput === scissors,
//      if comInput === rock, output computer wins
//      or if comInput === paper, output player wins!

//create a loop to count how many times the game has been played, and how
//many times each side wins
//  break the loop when user wins 3 times
//  break the loop when computer wins 3 times
//  break the loop if the game runs 5 times. (should be impossible, but just in case)


//overall
    //variables
let userInput;
let userInputCount = 0;
let comInput;
    //end variables
askUser();
console.log(userInput);
askCom();
console.log(comInput)




//end overall

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
            break;
        } else {
            userInputCount++;
            console.log('you have ' + userInputCount + ' tries. Terminate program at 5.')
        }
    }
}
//end block