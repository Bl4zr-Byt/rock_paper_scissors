function getComputerChoice() {
  choices = ["rock", "paper", "scissors"] 
  return choices[Math.floor(Math.random() * 3)]
}


function playRound(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    return undefined;

  } else {

    if (playerChoice === "rock" && compChoice === "scissors") {
      return true;
    }
    else if (playerChoice === "scissors" && compChoice === "paper"){
      return true;

    } else if (playerChoice === "paper" && compChoice === "rock") {
      return true;
    }
    else {

      if (compChoice === "rock" && playerChoice === "scissors") {
        return false;
      } 
      else if (compChoice === "paper" && playerChoice === "rock") {
        return false;
      }
      else if (compChoice === "scissors" && playerChoice === "paper") {
        return false;
      }
    }
  }
}
function gameBtnFunctionality(pChoice) {
  let compChoice = getComputerChoice()
  let outcome = playRound(pChoice, compChoice)

  playerChoiceDOM.textContent = pChoice
  compChoiceDOM.textContent = compChoice

  if (outcome === true) {
    gameMsg.textContent = `You Won! ${pChoice} beats ${compChoice}`
    scores[0] += 1
    playerScore.textContent = scores[0]
    console.log("win")
  }
  else if (outcome === false) {
    gameMsg.textContent = `You Lost! ${compChoice} beats ${pChoice}`
    scores[1] += 1
    compScore.textContent = scores[1]
    console.log("lose")
  }
  else {
    gameMsg.textContent = "You Tied!"
    console.log("tie")
  }
}


// variables
let scores = [0, 0]


// elements
const gameMsg = document.querySelector(".game-message")
const playerScore = document.querySelector(".player-score")
const compScore = document.querySelector(".comp-score")
const playerChoiceDOM = document.querySelector(".player-choice")
const compChoiceDOM = document.querySelector(".comp-choice")
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

// events
rockBtn.addEventListener("click", () => gameBtnFunctionality("rock"))
paperBtn.addEventListener("click", () => gameBtnFunctionality("paper"))
scissorsBtn.addEventListener("click", () => gameBtnFunctionality("scissors"))
