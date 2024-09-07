const myScoreP = document.getElementById("my-score");
const compScoreP = document.getElementById("comp-score");
const winsP = document.getElementById("wins");
const btnsDiv = document.getElementById("btns");
const restartBtn = document.getElementById("new-game-btn");

const choices = ["rock", "paper","scissors"];

let myScore = 0;
let compScore = 0;

btnsDiv.addEventListener("click", function(e) {
    const btnId = e.target.id;

    const compChoice = choices[Math.floor(Math.random() * choices.length)];

    if(btnId === compChoice) {
        winsP.textContent = "Its a tie!";
    } 
    
    else if((btnId === "rock" && compChoice === "paper") || (btnId === "scissors" && compChoice === "rock") || (btnId === "paper" && compChoice === "scissors")) {
        compScore++;
        compScoreP.textContent = compScore;
        winsP.textContent = "You lost!";
    } 
    
    else {
        myScore++;
        myScoreP.textContent = myScore;
        winsP.textContent = "You won!";
    }
});

restartBtn.onclick = function() {
    myScore = 0;
    myScoreP.textContent = `Your score: ${myScore}`;

    compScore = 0;
    compScoreP.textContent = `Computer score: ${compScore}`;
}