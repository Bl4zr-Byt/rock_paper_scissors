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
  if (score["player"] >= 5 || score["comp"] >= 5) {
    return;
  }

  let compChoice = getComputerChoice()
  let outcome = playRound(pChoice, compChoice)

  playerChoiceDOM.textContent = pChoice
  compChoiceDOM.textContent = compChoice

  if (outcome === true) {
    gameMsg.textContent = `You Won! ${pChoice} beats ${compChoice}`
    score["player"] += 1
    playerScore.textContent = score["player"]
  }
  else if (outcome === false) {
    gameMsg.textContent = `You Lost! ${compChoice} beats ${pChoice}`
    score["comp"] += 1
    compScore.textContent = score["comp"]
  }
  else {
    gameMsg.textContent = "You Tied!"
  }
}

// variables
let score = { "player": 0, "comp": 0 };

// elements
const gameMsg = document.querySelector(".game-message")

const playerScore = document.querySelector(".player-score")
const compScore = document.querySelector(".comp-score")

const playerChoiceDOM = document.querySelector(".player-choice")
const compChoiceDOM = document.querySelector(".comp-choice")

const choicesBtn = document.querySelectorAll(".choice")
choicesBtn.forEach((choice) => {
  choice.addEventListener("click", () => gameBtnFunctionality(choice.id))
})
