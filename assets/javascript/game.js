var words = ["blue","green","yellow","periwinkle","turquoise","violet","red","magenta","brown","mahogany","sienna","maize","purple","pink","black","orange","aqua","chocolate","lilac","fuchsia","grey","zinnwaldite"];
var wordBlanks = ""; //the string that will make _ _ _ _
var wins = 0; //how many times the user has won
var tries = 10; // how many attempts the user gets per word
var lettersDone = []; // which letters the user has guessed
//the word that is chosen from the words array by the computer
var chosenWord = words[Math.floor(Math.random() * words.length)];
//the for loop that puts as many "_ " as there are letters in the word that the computer chose
for (i = 0; i < chosenWord.length; i++) {
	wordBlanks = wordBlanks + "_";
}
//the html that is put in the index.html doc, this takes the updated wordBlanks in the key function (meaning changing the underscores to the corresponding letters chosen)

function updateHangman(word) {
	document.querySelector('#wordSpaces').innerHTML = "Guess the word: " + word;
	document.querySelector('#numberLength').innerHTML = tries;
	
}

updateHangman(wordBlanks);

	function inArray(letter, arr) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] == letter) {
				return true;
			}
		}
		return false;
	}

	function reset() {
		chosenWord = words[Math.floor(Math.random()*words.length)];
		wordBlanks = "";
		for (i = 0; i < chosenWord.length; i++) {
	wordBlanks = wordBlanks + "_";
	}
		tries = 10;
		lettersDone = [];
	}

//when the user types their guess
document.onkeyup = function (event) {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	var inWord = false;
	for (y = 0; y < chosenWord.length; y++) {
		if (letter == chosenWord[y]) {
			wordBlanks = wordBlanks.substr(0, y) + letter + wordBlanks.substr(y + 1);
			inWord = true;
		}else{}
		}
		if(!inWord && !inArray(letter, lettersDone)) {
			tries--;
			if(tries == 0){
				alert("you lose!");
				reset();
			}
		}else{}
	

	updateHangman(wordBlanks);

	if (event.keyCode > 64 && event.keyCode < 91) {
		lettersDone.push(letter);

		var html = "Letters already used: " + lettersDone + ",";
		document.querySelector('#usedLetters').innerHTML = html;
	} else {}
if(wordBlanks === chosenWord) {
			wins++;
			alert("you won!");
			reset()
		}
	
}









