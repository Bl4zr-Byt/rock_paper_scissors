function getComputerChoice() {
  choices = ["rock", "paper", "scissors"] 
  return choices[Math.floor(Math.random() * 3)]
}

function playRound(ps, cs) {
  // ps -> player selection
  // cs -> computer selection

  if (ps === cs) {
    return "You Tied!"

  } else {

    if (ps === "rock" && cs === "scissors") {
      return "You Won! Rock beats Scissors"
    }
    else if (ps === "scissors" && cs === "paper"){
      return "You Won! Scissors beats Paper"

    } else if (ps === "paper" && cs === "rock") {
      return "You Won! Paper beats Rock"
    }
    else {

      if (cs === "rock" && ps === "scissors") {
        return "You Lost! Rock beats Scissors"
      } 
      else if (cs === "paper" && ps === "rock") {
        return "You Lost! Paper beats Rock"
      }
      else if (cs === "scissors" && ps === "paper") {
        return "You Lost! Scissors beats Paper"
      }
    }
  }
}
let i = 0

function game() {
  for (let _ = 0; _ < 5; _++) {

    const playerSelection = prompt("Choose").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
    
  }
}

game()