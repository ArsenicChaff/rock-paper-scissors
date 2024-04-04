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

let userInput = prompt("Rock, paper, or scissors?")
userInput = userInput.toLowerCase()

console.log(userInput)