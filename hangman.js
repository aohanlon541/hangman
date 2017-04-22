//This will create my buttons 
//Somehow I think I need to make them have different ids

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (var i = 0; i < alphabet.length; i++) {
        var btn = document.createElement("button");              
		var t = document.createTextNode(alphabet[i]);
		btn.className = "buttonsAlphabet";
		btn.appendChild(t);                                          
		document.getElementById("buttonsContainer").appendChild(btn); 
		btn.onclick = subtractTries;	
    }
//To make a game of hangman, I need to have words that randomly selected
var hangmanWords = ["pumpkin", "coffee", "pineapples", "chocolate"];
var chosenWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
//to make sure it words -- not necessary 
console.log(chosenWord);
console.log(chosenWord.length);
//how many underscores a word needs
var totalUnderscores = chosenWord.length;

//Based on the chosen word, need to make a specifc amount of underscores ("_") for each character
document.getElementById("currentWord").innerHTML = ("_ ".repeat(totalUnderscores));  
// Need to establish number a tries somebody gets per game
var tries = 10;
//print into HTML
var triesCountHtml = ("<p>" + tries + " tries left </p>");
	document.getElementById("triesCount").innerHTML = triesCountHtml;

//function to subtract tries 

function subtractTries(num) { 
	if (tries > 0) {
		tries--;	
		console.log(tries);
		var triesCountHtml = ("<p>" + tries + " tries left </p>");
		document.getElementById("triesCount").innerHTML = triesCountHtml;
	}
	
	else {
		var triesCountHtml = ("<p> No tries left - Refresh to play again</p>");
		document.getElementById("triesCount").innerHTML = triesCountHtml;
	}	
}

// var onButtonClick = btn.onclick;
subtractTries(btn.onclick);



// When a letter is pressed it needs disappear & count against the guesses



// When the right letter is pressed by the user, the underscore(s) needs to disappear
// Correct letter needs to fill in in the spaces that it corresponds to

// When the wrong letter is pressed, it needs to go into the "wrong letter section"
// Wrong letter needs to create a line on a stick figure

// When the game is over (either by too many tries or winning), need to change 
// the hangman to "you win!" or "you lose!"
