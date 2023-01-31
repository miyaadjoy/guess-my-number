'use strict';

let score = 20;
let highScore = 0;
let secretScore = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.again').addEventListener('click', function () {
    secretScore = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

});





document.querySelector('.check').addEventListener('click', function () {

    const guessedNumber = document.querySelector('.guess').value;
    console.log(guessedNumber);

    
    //if no number is entered
    if (!guessedNumber) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    }
    //if input number is too high
    else if (guessedNumber > secretScore) {
        if (score > 1) {
            score--;
            document.querySelector('.message').textContent = '📈 Too High!';
            
        } else {
            
            document.querySelector('.message').textContent = '💥 You loose the game!';
            score = 0;
        }
         
    }
        
    //if input number is too low
    else if (guessedNumber < secretScore) {
        if (score > 1) {

            score--;
            document.querySelector('.message').textContent = '📉 Too Low!';
        } else {
            
            document.querySelector('.message').textContent = '💥 You loose the game!';
            score = 0;
        }
    }
    
    //if the input number is correct
    else {

        document.querySelector('.message').textContent = '🎉🎉 Correct Number!';
        document.querySelector('.number').textContent = secretScore;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '20rem';


        //high score

        if (score > highScore)
            highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        
    }
    document.querySelector('.score').textContent = score;
    
    
});


