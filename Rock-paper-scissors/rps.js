const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice
let computerChoice
let result

const possibleChoices = document.querySelectorAll('button')
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor( Math.random() * possibleChoices.length ) + 1
    //possibleChoices.length will return 3

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    else if (randomNumber === 2){
        computerChoice = 'paper'
    }
    else {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
    //InnerHTML is a property of the HTML DOM. innerHTML is often used to set and modify the contents of a <p> element. 
    //You can use innerHTML like so: document. getElementById(“paragraph”).
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'DRAW!'
    }
    else {
        if (computerChoice === 'rock' && userChoice === 'paper'){
            result = 'USER WON!'
        }
        if (computerChoice === 'rock' && userChoice === 'scissors'){
            result = 'COMPUTER WON!'
        }
        if (computerChoice === 'paper' && userChoice === 'rock') {
            result = 'COMPUTER WON!'
        }
        if (computerChoice === 'paper' && userChoice === 'scissors'){
            result = 'USER WON'
        }
        if (computerChoice === 'scissors' && userChoice === 'paper'){
            result = 'COMPUTER WON!'
        }
        if (computerChoice === 'scissors' && userChoice === 'rock') {
            result = 'USER WON!'
        }

    }
    resultDisplay.innerHTML = result
}


