
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

     for (var i = 0; i < alphabet.length; i++) {
        var btn = document.createElement("button");              
		var t = document.createTextNode(alphabet[i]);     
		btn.appendChild(t);                                          
		document.getElementById("buttonsAlphabet").appendChild(btn); 
    }


