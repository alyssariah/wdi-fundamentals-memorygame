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
},
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

//Declaring an empty array for cardInPlay to push flipped cards into
let cardsInPlay = [];
let backCardImage = "images/back.png";

//declaring variable for the flipButton and  restaratButton in the HTML document
const restartButton = document.getElementById('restart');
const flipButton= document.getElementById('flipOver');

//This function is used to display each card on the page under the id = "game-board"
function createBoard (){
	for (i =0; i <cards.length; i+=1){
		//a cardElement variable was made each time an image element was made during the loop
		let cardElement = document.createElement('img');
		//An attribute is added the img element called cardElement which is src="images/back.png"
		cardElement.setAttribute('src', "images/back.png");
		//setting the data-id for cardelement to i for every loop
		cardElement.setAttribute('data-id', i);
		//if a card element is clicked on, activate the function for flipCard
		cardElement.addEventListener('click', flipCard);
		//append each cardElement under the id="game-board"
		document.getElementById('game-board').appendChild(cardElement);
	}
};
//shuffling cards 
function shuffle(a) {
			for (let i = cards.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[a[i], a[j]] = [a[j], a[i]];
			}
			return a;
		}
//calling the functions		
shuffle(cards);

createBoard();

/*function for flipping the cards to show the image underneath and activating funcion 
 for checkForMatch after two cards are picked*/
function flipCard(){
	//only flip over cards with backCardImage and when there is less than two cards in play
if (this.src === backCardImage && cardsInPlay.length < 2){
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);
	//In the console, the rank, pathway to image, and suit should display after clicking on the card
	console.log("User flipped "+ cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
    //initiate checkForMatch after two cards are selected
	if(cardsInPlay.length === 2){
    checkForMatch();
    }
}
/*if user tries to flip another card after picking two mismatched cards, it will
result in an error message */
else if (cardsInPlay.length >= 2){
	alert('You must push the Flip Back Over button to continue.')
}
//if user tries to click on the same card twice, they will be alerted to pick another card
else {
	alert('Please pick another card');
}
};

//function for checking if the rank of the first and second card in the cardsInPlay match.
let totalScore = 0;
let cardElement = document.getElementsByTagName('img')
function checkForMatch() {
	if(cardsInPlay[0].cardImage === cardsInPlay[1].cardImage){
		//a loop to remove event listener from the match pair
		for (i =0; i< cards.length; i++){
			if(cardsInPlay[0].cardImage === cards[i].cardImage){
             cardElement[i].removeEventListener('click', flipCard);
			}
		}
		alert("You found a match!");
		//changing score board and taking cards out of play
	    totalScore +=1;
	    document.getElementById('score-board').innerHTML = "Score: "+ totalScore;  
	    for (i = 0; i< cards.length; i ++){
	    cardsInPlay.pop();  
	}
}
	else {
		alert("Sorry,try again. Push the Flip Back Over button when you are ready.");
		//changing score board
		totalScore -=1;
		document.getElementById('score-board').innerHTML = "Score: "+ totalScore;
	}
};

// //adding event listeners to buttons
// flipButton.addEventListener('click', flipBackOver);
// restartButton.addEventListener('click', restartGame);

// function flipBackOver(){
// 	//changing image of card to the back for the mismatches flipped over
// 	if (cardsInPlay.length === 2){
// 	for (i=0; i <cards.length; i++){
// 		if(cardsInPlay[0] === cards[i]){
// 		cardElement[i].setAttribute('src', backCardImage);
// 	}
// 	    else if (cardsInPlay[1] === cards[i]){
// 		cardElement[i].setAttribute('src', backCardImage);
// 	}
// }
// //remove cards from cardsInPlay array
// 	cardsInPlay.pop();
// 	cardsInPlay.pop();
// }
// }


function restartGame(){
	//a for loop was needed to go through the process of each card to pop it from play
	for (i = 0;i<cards.length; i++){
	cardsInPlay.pop();
};
//removing images from game-board
   let images = document.getElementById('game-board');
    while (images.firstChild){
	images.removeChild(images.firstChild);
};
//resetting by changing score to 0 and calling original functions
	totalScore= 0;
	document.getElementById('score-board').innerHTML = "Score: "+ totalScore;
	createBoard();
	shuffle(cards);
}