let randomNumber;
let upperLimit = 100;
let guessedNumber;
let tries = 0;

function startGuessNumbers() {

    randomNumber = Math.random() * upperLimit;
    randomNumber = Math.round(randomNumber + 0.5);

    document.getElementById("game-text2").innerText = "Rate eine Zahl zwischen 0 und 100, klicke dafür in die Mitte";
}

function checkInput() {
    if (randomNumber == null) {
        return;
    }

    guessedNumber = document.getElementById("input").value
    document.getElementById("game-text1").innerText = guessedNumber;

    if (randomNumber > guessedNumber) {
        document.getElementById("game-text2").innerText = "Deine Zahl ist zu klein";
    }
    
    else if (randomNumber < guessedNumber) {
        document.getElementById("game-text2").innerText = "Deine Zahl ist zu groß";
    }

    else if (randomNumber == guessedNumber) {
        document.getElementById("game-text2").innerText = "Richtig geraten." + " Du hast " + tries + " Versuche gebraucht.";
    }

    tries = tries + 1;

    return false;
}