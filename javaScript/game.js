var secretNumber = 4;

var guess = prompt("Guess a number");

if(guess == secretNumber){
    alert("you guess it right");
}
else if(guess > secretNumber){
    alert("too higher, guess again!")
}
else{
    alert("too low, guess again!")
}