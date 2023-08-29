// Globals
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice, computerChoice, result

// Grab buttons
possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {     // e is the event itself, in this case the click
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNum)

    if (randomNum === 1) {
        computerChoice = 'rock'
    }
    else if (randomNum === 2) {
        computerChoice = 'paper'
    }
    else {
        computerChoice = 'scissors'
    }
    
    // returns
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'it\'s a draw'
    }
    if ((computerChoice === 'rock' && userChoice === 'paper') || (computerChoice === 'paper' && userChoice === 'scissors') || (computerChoice === 'scissors' && userChoice === 'rock')) {
        result = 'you win!'
    }
    if ((computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper') || (computerChoice === 'rock' && userChoice === 'scissors')) {
        result = 'you lost!'
    }

    resultDisplay.innerHTML = result
}