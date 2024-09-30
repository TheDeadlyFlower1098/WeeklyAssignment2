// initializing player and computer scores
let playerScore = 0;
let computerScore = 0;

// detect button clicks for each choice
document.getElementById('rock').addEventListener('click', function() 
{
    playGame('rock');  // call the playGame function with player's choice as rock
});

document.getElementById('paper').addEventListener('click', function() 
{
    playGame('paper');  // call the playGame function with player's choice as paper
});

document.getElementById('scissors').addEventListener('click', function() 
{
    playGame('scissors');  // call the playGame function with player's choice  asscissors
});

// a function that plays the game
function playGame(playerChoice) 
{
    const computerChoice = getComputerChoice();  // get the computer's randomly selected choice
    const winner = getWinner(playerChoice, computerChoice);  // determine the winner of the round
    updateScore(winner, playerChoice, computerChoice);  // update the score and display the result
}

// a function that generates the computer's choice 
function getComputerChoice() 
{
    const choices = ['rock', 'paper', 'scissors'];  // an array of possible choices
    const randomIndex = Math.floor(Math.random() * 3);  // generating the random index between 0 and 2 (0, 1, 2)
    return choices[randomIndex];  // return the randomly selected choice
}

// a function to determine the winner of the round
function getWinner(player, computer) 
{
    // if both choices are the same, it's a draw
    if (player === computer) 
    {
        return 'draw'; // return that it ended in a draw
    } 
    //if the player's choice beats the computer's choice
    else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) 
    {
        return 'player';  //return that the player won
    } 
    //if the player didn't win and the game wasn't a draw, the computer wins
    else 
    {
        return 'computer'; //return that the computer won
    }
}

// a function that updates the score and displays it
function updateScore(winner, playerChoice, computerChoice) 
{
    // display the player's and computer's choices
    let resultText = `You - ${playerChoice}, Computer - ${computerChoice}`;

    // check the winner and update the score accordingly
    if (winner === 'player') 
    {
        playerScore++;  // increment player's score if they win
        resultText += ' (You Win!)';  // add a win message to the result text
    } 
    else if (winner === 'computer') 
    {
        computerScore++;  // increment computer's score if they win
        resultText += ' (Computer Wins!)';  // add a loss message to the result text
    } 
    else 
    {
        resultText += ' (It\'s a Draw!)';  // add a draw message if it's a tie
    }

    // update the result text on the webpage
    document.getElementById('resultText').textContent = resultText;

    // update the score text on the webpage
    document.getElementById('scoreText').textContent = `Score: You - ${playerScore}, Computer - ${computerScore}`;
}
