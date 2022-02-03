let arr = ['rock', 'paper','scissor'];
let playerScore = 0;
let computerScore =0;
function computerPlay(){
  let random = Math.floor(Math.random()*arr.length);
  return arr[random].toLowerCase();
}
function playRound(playerSelection, computerSelection) {
  if(playerSelection == arr[0] && computerSelection == arr[1] ) {
    alert("You lose,Paper beat Rock");
    computerScore += 1;
  }else if(playerSelection == arr[1] && computerSelection == arr[0] ) {
    alert("You win,Paper beat Rock");
    playerScore += 1;
  }else if(playerSelection == arr[0] && computerSelection == arr[2]) {
    alert("You win,Rock beat Scissor");
    playerScore += 1;
  }else if(playerSelection == [2] && computerSelection == arr[0]) {
    alert("You lose,Rock beat Scissor");
    computerScore += 1; 
  }else if(playerSelection == arr[1] && computerSelection == arr[2]) {
    alert("You lose,Scissor beat Paper");
    computerScore += 1;
  }else if(playerSelection == arr[2] && computerSelection == arr[1]) {
    alert("You win, Scissor beat Paper");
    playerScore +=1;
  }else if (playerSelection === '' || playerSelection === null) {
    alert("You don't decide, so you lose");
    computerScore += 1;
  }else {
    alert("Draw");
  }  
}

function game() {
  for(let i=0;i<5;i++){
    let playerSelection = prompt("Rock, Paper or Scissor ".toLowerCase());
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    alert(`Player:${playerScore} Computer:${computerScore}`);
    continue;
  }
  if(playerScore > computerScore) {
    alert('Player WIN');
  }else {
    alert('Computer WIN');
  }
  let reset = prompt("RESET THE GAME? (Y) ");
  if(reset == "Y") {
    document.location.reload();
  }
}
game();
