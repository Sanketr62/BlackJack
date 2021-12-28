let firstCard = 6;
let secondCard = 9;

let sum = firstCard + secondCard;
let hashBlackJack = false;
let message = ""
let isAlive = true;

if (sum <= 20) {
    message = "Do you want to draw a card?";
} else if (sum === 21) {
    message = "You've got Blckjack!";
    hashBlackJack = true;
} else {
    message = "You're out!";
    isAlive = false;
}

console.log(message);