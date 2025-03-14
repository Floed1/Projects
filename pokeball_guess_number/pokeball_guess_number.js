let randomNumber;
let upperLimit = 100;
let guessedNumber;
let tries;

function startGuessNumbers() {

    randomNumber = Math.random() * upperLimit;
    randomNumber = Math.round(randomNumber + 0.5);

    document.getElementById("game-text2").innerText = "Rate eine Zahl zwischen 0 und 100";
}

function checkInput() {
    if (randomNumber == null); {
        return;
        }

        guessedNumber = document.getElementById("input").ariaValue;
        document.getElementById("game-text1").innerText = guessedNumber;

        return false;
}