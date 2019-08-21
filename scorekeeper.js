var p1Btn = document.querySelector('#p1Score');
var p2Btn = document.querySelector('#p2Score');
var resetBtn = document.querySelector('#reset');
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector('p span');  
var p1Score = 0;
var p2Score = 0;
var gameOver = false;


var winningScore = 5;

var p1ScoreDisplay = document.querySelector('#p1ScoreDisplay');
var p2ScoreDisplay = document.querySelector('#p2ScoreDisplay');

p1Btn.addEventListener('click', function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1ScoreDisplay.classList.add('winner');
            gameOver = true;
        }
    }
    p1ScoreDisplay.textContent = p1Score;
});

p2Btn.addEventListener('click', function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2ScoreDisplay.classList.add('winner');
            gameOver = true;
        }
    }
    p2ScoreDisplay.textContent = p2Score;
});