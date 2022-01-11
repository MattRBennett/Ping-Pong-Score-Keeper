// Player 1 button
var player1 = document.querySelector('#player1');
// Player 1 h1
var p1Score = document.querySelector('#player1_score');
// Player 2 button
const player2 = document.querySelector('#player2');
// PLayer 2 h1
const p2Score = document.querySelector('#player2_score');
// Reset button
const resetScore = document.querySelector('#resetAll');
// Select score
var gameScore = document.querySelector('#gameScore');
// Value of increment for player 1 score
var p1Num = 0;
// Value of increment for player 2 score
var p2Num = 0;

// Updates the value in the select - Not my code, link to the SO page
// https://stackoverflow.com/questions/22795933/how-to-detect-a-select-change-event-if-changing-between-two-options-with-the-sam
// http://jsfiddle.net/sabof/LLpHb/
gameScore[0].onchange = function () {
    var index = this[this.selectedIndex];
    var inputText = index.text;
    console.log(inputText);
}
// Adds a variable to the game score
var limit = document.getElementById('gameScore').value;

// Function that will add classes depending on the outcome of the game
checkAns = () => {
    // Stops the user from starting without a score limit
    if (gameScore.value == 0 || gameScore.value == 0) {
        alert('Please select a value');
        p1Score.innerText = p1Num = 0;
        p2Score.innerText = p2Num = 0;
    }
    // Adds classes if player 1 wins and player 2 loses
    else if (p1Num == (gameScore.value)) {
        document.getElementById('player1_score').classList.add('winner');
        document.getElementById('player2_score').classList.add('loser');
        player1.disabled = true;
        player2.disabled = true;
        player1.classList.add('disabled');
        player2.classList.add('disabled');
    }
    // Adds classes if player 2 wins and player 1 loses
    else if (p2Num == (gameScore.value)) {
        document.getElementById('player2_score').classList.add('winner');
        document.getElementById('player1_score').classList.add('loser');
        player1.disabled = true;
        player2.disabled = true;
        player1.classList.add('disabled');
        player2.classList.add('disabled');
    }
}

// Click event listener - Should add 1 to score and run score checking function
player1.addEventListener('click', function () {
    p1Score.innerText = p1Num += 1;
    checkAns();
})

// Click event listener - Should add 1 to score and run score checking function
player2.addEventListener('click', function () {
    p2Score.innerText = p2Num += 1;
    checkAns();
})

// Reset Button - When score buttons are locked, use this to reset game.
resetScore.addEventListener('click', function () {
    location.reload();
})