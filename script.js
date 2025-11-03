let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const checkBtn = document.getElementById('checkBtn');
const restartBtn = document.getElementById('restartBtn');
const attemptsDisplay = document.getElementById('attempts');

checkBtn.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "⚠️ Please enter a number between 1 and 100!";
        message.style.color = "#ffcc00";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
        message.style.color = "#00ff99";
        restartBtn.classList.remove('hidden');
        checkBtn.disabled = true;
        guessInput.disabled = true;
    } else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high! Try again.";
        message.style.color = "#ff6666";
    } else {
        message.textContent = "📈 Too low! Try again.";
        message.style.color = "#66ccff";
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = "";
    guessInput.focus();
});

restartBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "";
    attemptsDisplay.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    checkBtn.disabled = false;
    restartBtn.classList.add('hidden');
});
