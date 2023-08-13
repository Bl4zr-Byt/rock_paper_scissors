function getComputerChoice() {
  choices = ["rock", "paper", "scissors"] 
  return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection) {
  compSelection = getComputerChoice()

  if (playerSelection === compSelection) {
    return "You Tied!"

  } else {

    if (playerSelection === "rock" && compSelection === "scissors") {
      return "You Won! Rock beats Scissors"
    }
    else if (playerSelection === "scissors" && compSelection === "paper"){
      return "You Won! Scissors beats Paper"

    } else if (playerSelection === "paper" && compSelection === "rock") {
      return "You Won! Paper beats Rock"
    }
    else {

      if (compSelection === "rock" && playerSelection === "scissors") {
        return "You Lost! Rock beats Scissors"
      } 
      else if (compSelection === "paper" && playerSelection === "rock") {
        return "You Lost! Paper beats Rock"
      }
      else if (compSelection === "scissors" && playerSelection === "paper") {
        return "You Lost! Scissors beats Paper"
      }
    }
  }
}
