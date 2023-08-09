function getComputerChoice() {
  choices = ["rock", "paper", "scissors"] 
  random_choice = Math.floor(Math.random() * 3 ) 
  return choices[random_choice]
}