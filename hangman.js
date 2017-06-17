//This will create my buttons
//Somehow I think I need to make them have different ids

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//To make a game of hangman, I need to have words that randomly selected
var hangmanWords = ["tacos", "kombucha", "zilker", "dogs", "rainey", "bats", "hipster", "capit"];
var chosenWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
//to make sure it words -- not necessary
console.log(chosenWord);
//how many underscores a word needs
var totalUnderscores = chosenWord.length;

//Based on the chosen word, need to make a specifc amount of underscores ("_") for each character
var underscore = "<span>_ </span>".repeat(totalUnderscores);
document.getElementById("currentWord").innerHTML = underscore;

// Need to establish number a tries somebody gets per game
var tries = 10;
//print into HTML
var youLoseHtml = ("<p>You lose!</p>");

// initialize the tries here
var triesCountHtml = ("<p>" + tries + " tries left </p>");
document.getElementById("triesCount").innerHTML = triesCountHtml;


function drawCircle() {
	var canvas = document.getElementById("hangmanBox");
	var context = canvas.getContext("2d");context.beginPath();
	context.beginPath();
	context.arc(250,45,15,0,2*Math.PI);
	context.stroke();
}

function drawLine(start, finish) {
	var canvas = document.getElementById("hangmanBox");
	var context = canvas.getContext("2d");
	context.beginPath();
	context.moveTo(start[0], start[1]);
	context.lineTo(finish[0], finish[1]);
	context.stroke();
};

var LINE_MAPPING = {
	1: {start: [500, 145], end: [200, 145]},
	2: {start: [200, 145], end: [200, 20]},
	3: {start: [200, 20], end: [250, 20]},
	4: {start: [250, 20], end: [250, 30]},
	5: {start: [250, 59], end: [250, 100]},
	6: {start: [250, 80], end: [220, 60]},
	7: {start: [250, 80], end: [280, 60]},
	8: {start: [250, 100], end: [220, 120]},
	9: {start: [250, 100], end: [280, 120]},
}

function executeDrawLine(line_number) {
	var data = LINE_MAPPING[line_number];
	var start = data.start;
	var end = data.end;
	drawLine(start, end);
}


function subtractTries() {
	if (tries > 0) {
		tries--;
		console.log(tries);
		var triesCountHtml = ("<p>" + tries + " tries left </p>");
		document.getElementById("triesCount").innerHTML = triesCountHtml;

			if (tries === 8) {
				executeDrawLine(1);
			}
			else if (tries === 7) {
				executeDrawLine(2);
			}
			else if (tries === 6) {
				executeDrawLine(3);
				executeDrawLine(4);
			}
			else if (tries === 5) {
				drawCircle();
			}
			else if (tries === 4) {
				executeDrawLine(5);
			}
			else if (tries === 3) {
				executeDrawLine(6);
			}
			else if (tries === 2) {
				executeDrawLine(7);
			}
			else if (tries === 1) {
				executeDrawLine(8);
			}
			else if (tries === 0) {
				executeDrawLine(9);
			}

	}

}


function addLetterOnClickHandler(letter) {
	var uppercaseLetter = letter.toUpperCase();
	var btn = document.getElementById("btn" + uppercaseLetter) // as in btnA
	btn.onclick = function printValue() {
		var letterPlacement = chosenWord.indexOf(letter);
		if (letterPlacement === -1) {
		 	subtractTries();
		 	var span_element = document.createElement("span");
		 	var text_node_spaced = document.createTextNode(uppercaseLetter + ", ");
		 	span_element.appendChild(text_node_spaced);
		 	document.getElementById("letterCount").appendChild(span_element);
		 	btn.disable = true;
		}
		else {
			var text_node = document.createTextNode(uppercaseLetter);
			var item = document.getElementById("currentWord").childNodes[letterPlacement];
			item.replaceChild(text_node, item.childNodes[0]);
		}
	}
}

alphabet.map(function(letter) {
	addLetterOnClickHandler(letter);
})


// When a letter is pressed it needs disappear & count against the guesses



// When the game is over (either by too many tries or winning), need to change
// the hangman to "you win!" or "you lose!"
