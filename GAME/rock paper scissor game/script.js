document.addEventListener('DOMContentLoaded', function() {
    const choices = ['rock', 'paper', 'scissors'];

    const playerChoiceDisplay = document.getElementById('player-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const outcomeDisplay = document.getElementById('outcome');

    document.querySelectorAll('.choice').forEach(function(choice) {
        choice.addEventListener('click', function() {
            const user_action = this.id;
            const computer_action = choices[Math.floor(Math.random() * choices.length)];

            playerChoiceDisplay.textContent = 'Your choice: ' + user_action;
            computerChoiceDisplay.textContent = 'Computer\'s choice: ' + computer_action;

            let result = "";

            if (user_action === computer_action) {
                result = `Both players selected ${user_action}. It's a tie!`;
            } else if (user_action === "rock") {
                if (computer_action === "scissors") {
                    result = "Rock smashes scissors! You win!";
                } else {
                    result = "Paper covers rock! You lose.";
                }
            } else if (user_action === "paper") {
                if (computer_action === "rock") {
                    result = "Paper covers rock! You win!";
                } else {
                    result = "Scissors cuts paper! You lose.";
                }
            } else if (user_action === "scissors") {
                if (computer_action === "paper") {
                    result = "Scissors cuts paper! You win!  :D";
                } else {
                    result = "Rock smashes scissors! You lose.  :(";
                }
            }

            outcomeDisplay.textContent = result;
        });
    });
});
