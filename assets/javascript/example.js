//this sets the game variable to have word guesses and wins properties as well a pickWork function property
var game ={
	words: [["blue"],["green"],["red"],["orange"],["brown"]],
	guesses: 10,
	wins: 0,
	tries: [],
//this makes the computer pick a random word from your words array
	pickWord: function() {
		return [Math.floor(Math.random()*this.words.length)];
	},
}
//this color variable is what word the computer chose up
var color = game.pickWord();
//this gives the variable a value of the pickword function, since that value will be an array from words, you need the '0' to define that it is the first value in the array, incase we add more later
var gameWord = game.words[color][0];
//this takes the word that gameWord "grabs" and makes every letter of it a property in an array
var gameWordArray = gameWord.split("");
//this takes all of the letters in the word and makes them lowercase
var gameWordLCase = gameWord.toLowerCase();
//this puts the word in the console
console.log(gameWordArray);

//this will create 
function createGame(){
	for(i=0; i < gameWordArray.length; i++){
		if(gameWordArray[i] === " "){
			letterList = gameWordArray[i];
			document.getElementById('wordSpaces').innerHTML += letterList; 
		} else {
			letterList = "_ ";
			document.getElementById('wordSpaces').innerHTML += letterList;
		}
	}
}

createGame();//create game 
console.log(gameWord);

document.onkeyup = function(event) {//on keyup function
	var key = String.fromCharCode(event.keyCode).toLowerCase();//turn event of key into lowercase

	if(event.keyCode > 64 && event.keyCode < 91) {//check for only letter keys
				game.tries.push(key);//push letter into attempts array
				var index = gameWordLCase.indexOf(key);//check for double letters by setting index equal to place where first letter appeared
				document.getElementById().innerHTML = key;//add letter in html using id
					var otherIndex = gameWordLCase.indexOf(key, index + 1);//find other index of same letter
					game.correct.push(key);//also add same letter to correct since I'm using .length to check for a win
					document.getElementById(otherIndex).innerHTML = key;//add same letter in html using id
				}
				console.log(gameWordLCase.length);
				console.log(game.correct.length);
		
	
	
	var html = '<p>Turns Left: ' + game.guesses + '</p>' + 
	'<p>Guessed Letters: ' + game.attempts.join(',') + '</p>' + 
	'<p>Wins: ' + game.wins + '</p>' + 
	'<p>Losses: ' + game.losses + '</p>';

	document.querySelector('#stats').innerHTML = html;
}
