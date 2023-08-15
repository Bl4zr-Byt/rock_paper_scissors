function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"] 
  return choices[Math.floor(Math.random() * 3)]
}


function playRound(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    return undefined;
  }
  if (
    playerChoice === "rock" && compChoice === "scissors" ||
    playerChoice === "scissors" && compChoice === "paper" ||
    playerChoice === "paper" && compChoice === "rock"
  ) return true;

  if (
    compChoice === "rock" && playerChoice === "scissors" ||
    compChoice === "paper" && playerChoice === "rock" ||
    compChoice === "scissors" && playerChoice === "paper"
    ) return false;
}

function gameBtnFunctionality(pChoice) {
  if (winnerIsDecided) return;
  
  resetBtn.style.display = "inline";
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
    score["computer"] += 1
    compScore.textContent = score["computer"]
  }
  else {
    gameMsg.textContent = "You Tied!"
  }

  if (score["player"] >= 5 || score["computer"] >= 5) {
    winnerIsDecided = true;
    let winner = Object.keys(score).find(key => {
      return score[key] === Math.max(score["player"], score["computer"]);
    }).toUpperCase()
    
    winMsg.textContent = `${winner} WON THE GAME, GG!!`
    playAgainBtn.style.display = "inline";
    winMsg.style.display = "block";
    return; 
  }
}

function resetGame() {
  winnerIsDecided = false;
  score["player"] = 0, score["computer"] = 0
  playerScore.textContent = 0
  compScore.textContent = 0
  gameMsg.textContent = "Nothing to show"
  playerChoiceDOM.textContent = "empty"
  compChoiceDOM.textContent = "empty"
  winMsg.style.display = "none";
  playAgainBtn.style.display = "none";
  resetBtn.style.display = "none";
}

// variables
let score = { "player": 0, "computer": 0 };
let winnerIsDecided = false;

// elements
const gameMsg = document.querySelector(".game-message")
const heading = document.querySelector("#head")
const winMsg = document.querySelector(".win-overlay")

const playerScore = document.querySelector(".player-score")
const compScore = document.querySelector(".comp-score")

const playerChoiceDOM = document.querySelector(".player-choice")
const compChoiceDOM = document.querySelector(".comp-choice")

const resetBtn = document.querySelector("#reset")
const playAgainBtn = document.querySelector("#play-again")

const choicesBtn = document.querySelectorAll(".choice")

// Styles
resetBtn.style.display = "none"; 
playAgainBtn.style.display = "none";
winMsg.style.display = "none";

// Events
choicesBtn.forEach((choice) => {
  choice.addEventListener("click", () => gameBtnFunctionality(choice.id))
})
resetBtn.addEventListener("click", resetGame)
playAgainBtn.addEventListener("click", resetGame)