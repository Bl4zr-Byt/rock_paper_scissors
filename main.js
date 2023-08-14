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
