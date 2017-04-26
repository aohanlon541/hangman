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

//function to subtract tries 

var disabledBtn = document.getElementsByClassName("buttonAbc");

 
function subtractTries() { 
	if (tries > 0) {
		tries--;	
		console.log(tries);
		var triesCountHtml = ("<p>" + tries + " tries left </p>");
		document.getElementById("triesCount").innerHTML = triesCountHtml;
	}
	
	else if (tries === 0) {
		var triesCountHtml = ("<p> No tries left - Refresh to play again</p>");
		document.getElementById("triesCount").innerHTML = triesCountHtml;
		document.getElementById("bigBox").innerHTML = youLoseHtml;
		disabledBtn.disable = true;
	}
}

subtractTries();




// var btnLetter = document.getElementsByClassName("buttonAbc");
// for (i = 0; i < alphabet.length; i++) {
// 	btnLetter.onclick = function printValue() {
// 		var letterPlacement = chosenWord.indexOf([i]);
// 		console.log(letterPlacement);
// 		 if (letterPlacement === -1) {
// 		 	var spanLetter = document.createElement("span");
// 		 	var tLetter = document.createTextNode([i] + ", "); 
// 		 	spanA.appendChild(tLetter);  
// 		 	document.getElementById("letterCount").appendChild(spanA);
// 		 }
// 		 else {
// 		 	// console.log("letter a is in this words")
// 		 	// document.getElementById("currentWord").innerHTML = btn.value;
// 		 	var textnodeLetter = document.createTextNode([i]);
// 		 	var itemLetter = document.getElementById("currentWord").childNodes[letterPlacement];
// 		 	itemLetter.replaceChild(textnodeLetter, itemLetter.childNodes[0]);
// 		 }
// 	}
// }

// var btnLetter = document.getElementsByClassName("buttonAbc");

// btnLetter.visited = function disableBtn() {
// 	document.getElementsByClassName("buttonAbc").style.color = "red";

// }

//a
var btnA = document.getElementById("btnA");
btnA.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("a");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanA = document.createElement("span");
	 	var tA = document.createTextNode("A, "); 
	 	spanA.appendChild(tA);  
	 	document.getElementById("letterCount").appendChild(spanA);
}
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeA = document.createTextNode("A");
	 	var itemA = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemA.replaceChild(textnodeA, itemA.childNodes[0]);
	 }
}
//b
var btnB = document.getElementById("btnB");
btnB.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("b");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanB = document.createElement("span");
	 	var tB = document.createTextNode("B, "); 
	 	spanB.appendChild(tB);  
	 	document.getElementById("letterCount").appendChild(spanB);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeB = document.createTextNode("B");
	 	var itemB = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemB.replaceChild(textnodeB, itemB.childNodes[0]);
	 }
}
//c
var btnC = document.getElementById("btnC");
btnC.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("c");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanC = document.createElement("span");
	 	var tC = document.createTextNode("C, "); 
	 	spanC.appendChild(tC);  
	 	document.getElementById("letterCount").appendChild(spanC);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeC = document.createTextNode("C");
	 	var itemC = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemC.replaceChild(textnodeC, itemC.childNodes[0]);
	 }
}
//d
var btnD = document.getElementById("btnD");
btnD.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("d");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanD = document.createElement("span");
	 	var tD = document.createTextNode("D, "); 
	 	spanD.appendChild(tD);  
	 	document.getElementById("letterCount").appendChild(spanD);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeD = document.createTextNode("D");
	 	var itemD = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemD.replaceChild(textnodeD, itemD.childNodes[0]);
	 }
}
//e
var btnE = document.getElementById("btnE");
btnE.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("e");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanE = document.createElement("span");
	 	var tE = document.createTextNode("E, "); 
	 	spanE.appendChild(tE);  
	 	document.getElementById("letterCount").appendChild(spanE);
	 }
	 else {
		var textnodeE = document.createTextNode("E");
	 	var itemE = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemE.replaceChild(textnodeE, itemE.childNodes[0]);
	 }
}
//f
var btnF = document.getElementById("btnF");
btnF.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("f");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanF = document.createElement("span");
	 	var tF = document.createTextNode("F, "); 
	 	spanF.appendChild(tF);  
	 	document.getElementById("letterCount").appendChild(spanF);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeF = document.createTextNode("F");
	 	var itemF = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemF.replaceChild(textnodeF, itemF.childNodes[0]);
	 }
}
//g
var btnG = document.getElementById("btnG");
btnG.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("g");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanG = document.createElement("span");
	 	var tG = document.createTextNode("G, "); 
	 	spanG.appendChild(tG);  
	 	document.getElementById("letterCount").appendChild(spanG);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeG = document.createTextNode("G");
	 	var itemG = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemG.replaceChild(textnodeG, itemG.childNodes[0]);
	 	}
	} 
//h
var btnH = document.getElementById("btnH");
btnH.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("h");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanH = document.createElement("span");
	 	var tH = document.createTextNode("H, "); 
	 	spanH.appendChild(tH);  
	 	document.getElementById("letterCount").appendChild(spanH);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeH = document.createTextNode("H");
	 	var itemH = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemH.replaceChild(textnodeH, itemH.childNodes[0]);
	 	}
	} 
//i
var btnI = document.getElementById("btnI");
btnI.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("i");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanI = document.createElement("span");
	 	var tI = document.createTextNode("I, "); 
	 	spanI.appendChild(tI);  
	 	document.getElementById("letterCount").appendChild(spanI);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeI = document.createTextNode("I");
	 	var itemI = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemI.replaceChild(textnodeI, itemI.childNodes[0]);
	 }
	} 
//j
var btnJ = document.getElementById("btnJ");
btnJ.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("j");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanJ = document.createElement("span");
	 	var tJ = document.createTextNode("J, "); 
	 	spanJ.appendChild(tJ);  
	 	document.getElementById("letterCount").appendChild(spanJ);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeJ = document.createTextNode("J");
	 	var itemJ = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemJ.replaceChild(textnodeJ, itemJ.childNodes[0]);
	 }
	} 
//K
var btnK = document.getElementById("btnK");
btnK.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("k");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanK = document.createElement("span");
	 	var tK = document.createTextNode("K, "); 
	 	spanK.appendChild(tK);  
	 	document.getElementById("letterCount").appendChild(spanK);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeK = document.createTextNode("K");
	 	var itemK = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemK.replaceChild(textnodeK, itemK.childNodes[0]);
	 }
	} 
//L
var btnL = document.getElementById("btnL");
btnL.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("l");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanL = document.createElement("span");
	 	var tL = document.createTextNode("L, "); 
	 	spanL.appendChild(tL);  
	 	document.getElementById("letterCount").appendChild(spanL);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeL = document.createTextNode("L");
	 	var itemL = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemL.replaceChild(textnodeL, itemL.childNodes[0]);
	 }
	} 
//m
var btnM = document.getElementById("btnM");
btnM.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("m");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanM = document.createElement("span");
	 	var tM = document.createTextNode("M, "); 
	 	spanM.appendChild(tM);  
	 	document.getElementById("letterCount").appendChild(spanM);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeM = document.createTextNode("M");
	 	var itemM = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemM.replaceChild(textnodeM, itemM.childNodes[0]);
	 }
	} 
//n
var btnN = document.getElementById("btnN");
btnN.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("n");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanN = document.createElement("span");
	 	var tN = document.createTextNode("N, "); 
	 	spanN.appendChild(tN);  
	 	document.getElementById("letterCount").appendChild(spanN);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeN = document.createTextNode("N");
	 	var itemN = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemN.replaceChild(textnodeN, itemN.childNodes[0]);
	 }
	} 
//o
var btnO = document.getElementById("btnO");
btnO.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("o");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanO = document.createElement("span");
	 	var tO = document.createTextNode("O, "); 
	 	spanO.appendChild(tO);  
	 	document.getElementById("letterCount").appendChild(spanO);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeO = document.createTextNode("O");
	 	var itemO = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemO.replaceChild(textnodeO, itemO.childNodes[0]);
	 }
}
//p
var btnP = document.getElementById("btnP");
btnP.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("p");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanP = document.createElement("span");
	 	var tP = document.createTextNode("P, "); 
	 	spanP.appendChild(tP);  
	 	document.getElementById("letterCount").appendChild(spanP);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeP = document.createTextNode("P");
	 	var itemP = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemP.replaceChild(textnodeP, itemP.childNodes[0]);
	 }
	} 
//q
var btnQ = document.getElementById("btnQ");
btnQ.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("q");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanQ = document.createElement("span");
	 	var tQ = document.createTextNode("Q, "); 
	 	spanQ.appendChild(tQ);  
	 	document.getElementById("letterCount").appendChild(spanQ);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeQ = document.createTextNode("Q");
	 	var itemQ = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemQ.replaceChild(textnodeQ, itemQ.childNodes[0]);
	 }
	}
//r
var btnR = document.getElementById("btnR");
btnR.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("r");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanR = document.createElement("span");
	 	var tR = document.createTextNode("R, "); 
	 	spanR.appendChild(tR);  
	 	document.getElementById("letterCount").appendChild(spanR);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeR = document.createTextNode("R");
	 	var itemR = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemR.replaceChild(textnodeR, itemR.childNodes[0]);
	 }
	}
//s
var btnS = document.getElementById("btnS");
btnS.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("s");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanS = document.createElement("span");
	 	var tS = document.createTextNode("S, "); 
	 	spanS.appendChild(tS);  
	 	document.getElementById("letterCount").appendChild(spanS);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeS = document.createTextNode("S");
	 	var itemS = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemS.replaceChild(textnodeS, itemS.childNodes[0]);
	 }
	}
//t
var btnT = document.getElementById("btnT");
btnT.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("t");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanT = document.createElement("span");
	 	var tT = document.createTextNode("T, "); 
	 	spanT.appendChild(tT);  
	 	document.getElementById("letterCount").appendChild(spanT);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeT = document.createTextNode("T");
	 	var itemT = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemT.replaceChild(textnodeT, itemT.childNodes[0]);
	 }
	}
//u
var btnU = document.getElementById("btnU");
btnU.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("u");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanU = document.createElement("span");
	 	var tU = document.createTextNode("U, "); 
	 	spanU.appendChild(tU); 
	 	document.getElementById("letterCount").appendChild(spanU);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeU = document.createTextNode("U");
	 	var itemU = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemU.replaceChild(textnodeU, itemU.childNodes[0]);
	 }
	}
//v
var btnV = document.getElementById("btnV");
btnV.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("v");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanV = document.createElement("span");
	 	var tV = document.createTextNode("V, "); 
	 	spanV.appendChild(tV); 
	 	document.getElementById("letterCount").appendChild(spanV);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeV = document.createTextNode("V");
	 	var itemV = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemV.replaceChild(textnodeV, itemV.childNodes[0]);
	 }
	}
//W
var btnW = document.getElementById("btnW");
btnW.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("w");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanW = document.createElement("span");
	 	var tW = document.createTextNode("W, "); 
	 	spanW.appendChild(tW); 
	 	document.getElementById("letterCount").appendChild(spanW);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeW = document.createTextNode("W");
	 	var itemW = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemW.replaceChild(textnodeW, itemW.childNodes[0]);
	 }
	}
//X
var btnX = document.getElementById("btnX");
btnX.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("x");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanX = document.createElement("span");
	 	var tX = document.createTextNode("X, "); 
	 	spanX.appendChild(tX); 
	 	document.getElementById("letterCount").appendChild(spanX);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeX = document.createTextNode("X");
	 	var itemX = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemX.replaceChild(textnodeX, itemX.childNodes[0]);
	 }
	}
//Y
var btnY = document.getElementById("btnY");
btnY.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("y");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanY = document.createElement("span");
	 	var tY = document.createTextNode("Y, "); 
	 	spanY.appendChild(tY); 
	 	document.getElementById("letterCount").appendChild(spanY);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeY = document.createTextNode("y");
	 	var itemY = document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemY.replaceChild(textnodeY, itemY.childNodes[0]);
	 }
	}
//Z
var btnZ = document.getElementById("btnZ");
btnZ.onclick = function printValue() {
	var letterPlacement = chosenWord.indexOf("z");
	console.log(letterPlacement);
	 if (letterPlacement === -1) {
	 	subtractTries();
	 	var spanZ = document.createElement("span");
	 	var tZ = document.createTextNode("Z, "); 
	 	spanZ.appendChild(tZ);  
	 	document.getElementById("letterCount").appendChild(spanZ);
	 }
	 else {
	 	// document.getElementById("currentWord").innerHTML = btn.value;
	 	var textnodeZ = document.createTextNode("Z");
	 	var itemZ= document.getElementById("currentWord").childNodes[letterPlacement];
	 	itemZ.replaceChild(textnodeZ, itemZ.childNodes[letterPlacement]);
	 }
	}



// When a letter is pressed it needs disappear & count against the guesses




// Stick Figure

//

// When the game is over (either by too many tries or winning), need to change 
// the hangman to "you win!" or "you lose!"
