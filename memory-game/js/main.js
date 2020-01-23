//Declaring properties (rank, suit, and cardImage) of the object for each card in an array
let cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",	
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
//This function is used to display each card on the page under the id = "game-board"
function createBoard (){
	for (i =0; i <cards.length; i+=1){
		//a cardElement variable was made each time an image element was made during the loop
		let cardElement = document.createElement('img');
		//An attribute is added the img element called cardElement which is src="images/back.png"
		cardElement.setAttribute('src', 'images/back.png');
		//setting the data-id for cardelement to i for every loop
		cardElement.setAttribute('data-id', i);
		//if a card element is clicked on, activate the function for flipCard
		cardElement.addEventListener('click', flipCard);
		//append each cardElement under the id="game-board"
		document.getElementById('game-board').appendChild(cardElement);
	}
};
//Declaring an empty array for cardInPlay to push flipped cards into
let cardsInPlay = [];

/*function for flipping the cards to show the image underneath and activating funcion 
 for checkForMatch after two cards are picked*/
function flipCard(){
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	//initiate checkForMatch after two cards are selected
	if(cardsInPlay.length === 2){
    checkForMatch();
	}
	//In the console, the rank, pathway to image, and suit should display after clicking on the card
	console.log("User flipped "+ cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};

//function for checking if the rank of the first and second card in the cardsInPlay match.
let totalScore = 0;
function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	    totalScore +=1;
	    document.getElementById('score-board').innerHTML = "Score: "+ totalScore;
	}
	else {
		alert("Sorry,try again.");
		document.getElementById('score-board').innerHTML = "Score: "+ totalScore;
	}
};
createBoard();

//make variable for the flipButton and  restaratButton in the HTML document
const flipButton = document.getElementById('flipBack');
const restartButton = document.getElementById('restart');

//add an event listener so when the button is clicked, resetGame function will be activated
flipButton.addEventListener('click', flipBackOver);
restartButton.addEventListener('click', restartGame);

//resetGame function takes all the cards out of the cardsInPlay array and turn back over cards
function flipBackOver(){
	//a for loop was needed to go through the process four times to reset each card
	for (i =0; i<=3; i ++){
	cardsInPlay.pop();//each loop removes one of the items in the cardsInPlay array
	cardElement = document.getElementsByTagName('img')[i]; //defining the variable cardElement
	cardElement.setAttribute('src', 'images/back.png');//resetting the picture of the card to the back
	};
};
function restartGame(){
	//a for loop was needed to go through the process four times to reset each card
	for (i =0; i<=3; i ++){
	cardsInPlay.pop();//each loop removes one of the items in the cardsInPlay array
	cardElement = document.getElementsByTagName('img')[i]; //defining the variable cardElement
	cardElement.setAttribute('src', 'images/back.png');//resetting the picture of the card to the back
	totalScore= 0;
	document.getElementById('score-board').innerHTML = "Score: "+ totalScore;
	};
};