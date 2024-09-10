document.addEventListener('DOMContentLoaded', function() {
    const choices = ['rock', 'paper', 'scissors'];

    const playerChoiceDisplay = document.getElementById('player-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const outcomeDisplay = document.getElementById('outcome');

    document.querySelectorAll('.choice').forEach(function(choice) {
        choice.addEventListener('click', function() {
            const playerChoice = this.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            playerChoiceDisplay.textContent = 'Your choice: ' + playerChoice;
            computerChoiceDisplay.textContent = 'Computer\'s choice: ' + computerChoice;

            if (playerChoice === computerChoice) {
                outcomeDisplay.textContent = "It's a tie!";
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'scissors' && computerChoice === 'paper') ||
                (playerChoice === 'paper' && computerChoice === 'rock')
            ) {
                outcomeDisplay.textContent = "You win!";
            } else {
                outcomeDisplay.textContent = "You lose!";
            }
        });
    });
});
