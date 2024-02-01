// Logs 'hi' to the console
// Debug statement to ensure code works. Disregard.
console.log('hi');

// Function to store user choice and determine if valid response is provided.
// Uses single if statement
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput
  } else {
    console.log('Invalid response. Please try again.');
  };
}

// Function to store computer choice, using math.floor and math.random to determine a number between 0 - 3, assigning variables to the appropriate numbers through if/else.
// Uses if/else if statements
 const getComputerChoice = () => {
const num = Math.floor(Math.random() * 3);
if (num === 0){
  return 'rock';
} else if (num === 1){
  return 'paper';
} else {
  return 'scissors';
}
 };

// Function to combine user choice and computer choice to determine a winner of the game, then returning the result
// Uses nested if statements
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "The game is a tie.";
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "The computer won.";
    } else {
      return "The user won.";
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return "The computer won.";
    } else {
      return "The user won.";
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return "The computer won.";
    } else {
      return "The user won.";
    }
  }
  if (userChoice === 'bomb'){
    return "The user won.";
  }
};

// Function to initiate a game, declaring input variables to use (refer to functions above)
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();

  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

// Initiates appropriate function to play a game of rock, paper, scissors.
playGame();
