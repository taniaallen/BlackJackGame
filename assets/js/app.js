$(document).ready(function() {
	$hit.prop('disabled', true);

	var $balance = $('.player-balance');
	var $bet = $('#bet');
	// console.log($bet);
	$balance.text('100.00');

	// when the bet button is clicked, the betClicked function should be invoked.
	$bet.on('click', betClicked);
})


// Object that contains the file name and value of the cards


var deckObject = [
	{
		image : 'clubs2.png',
		value : 2
	},
	{
		image : 'clubs3.png',
		value : 3
	},
	{
		image : 'clubs4.png',
		value : 4
	},
	{
		image : 'clubs5.png',
		value : 5
	},
	{
		image : 'clubs6.png',
		value : 6
	},
	{
		image : 'clubs7.png',
		value : 7
	},
	{
		image : 'clubs8.png',
		value : 8
	},
	{
		image : 'clubs9.png',
		value : 9
	},
	{
		image : 'clubs10.png',
		value : 10
	},
	{
		image : 'clubsJ.png',
		value : 10
	},
	{
		image : 'clubsK.png',
		value : 10
	},
	{
		image : 'clubsQ.png',
		value : 10
	}
]


// Variables for the pot, betting, points and player balance

var $pot = $('.pot');
var potBalance = 0;
var $balance = $('.player-balance');
var balanceNumber = 100.00;
var $bet = $('#bet');
var playerTurn = false;
var playerPoints = 0;
var dealerPoints = 0;


function betClicked() {
	console.log('bet button clicked');

	// 10.00 should be placed in the pot
	if (balanceNumber === 0) {
		alert('you have no more funds to play!');
	} else {
		// 10.00 should be deducted from the player's balance
		balanceNumber -= 10;
		// 10.00 should be added to the winning pot
		potBalance += 10;
		// console.log($balance);
		// update the text of balance to reflect the new sum of balanceNumber
		$balance.text(balanceNumber);
		// update the text of pot to reflect the new sum of potBalance
		$pot.text(potBalance);
	}

	dealCards();
	$bet.prop('disabled', true);

	$hit.prop('disabled', false);

}

function dealCards() {  // function to determine how many cards to deal and who to deal them to in the game
	// when invoked, dealer gets a face down card
	var faceDown = getCard();
	// store the value of the face down card
	var faceDownValue = faceDown.value;
		// Generate the down facing card for the dealer
		var faceDownImage = $('<img>').attr('src', 'assets/images/boardgamepack/PNG/Cards/cardBack_blue2.png');
		faceDownImage.attr('card', faceDown.image);
		faceDownImage.attr('data-value', faceDown.value);

		$('.dealer-hand').append(faceDownImage);
 		//  *********** Need to add the value of the card as an attribute to the image


	// player one gets a face up card
	var playerCard = getCard();
	
	generatePlayerCards(playerCard);

	var dealerCard = getCard();

	generateDealerCards(dealerCard);

	$('button').off('#bet');  // attempted to prevent the button from being clicked but syntax may not be right
}








var $hit = $('#hit');  // if the player clicks the hit button, generate a new card

$hit.on('click', hitClicked); 




function getCard(image) {    // function to create and return a card image when invoked
	// Variable for random numbering
	var randomNumber =  Math.floor(Math.random() * 12);
	// get card image name
	return deckObject[randomNumber];
}

function generateDealerCards(dealerCard) {  // Create a function that generates the image tag for the card 
	var cardImage = $('<img>').attr('src', 'assets/images/boardgamepack/PNG/Cards/' + dealerCard.image);
	cardImage.attr('data-value', dealerCard.value);
	$('.dealer-hand').append(cardImage);

};

function generatePlayerCards(playerCard) {
	// create a variable to piece together the image tag for the card.
	var cardImage = $('<img>').attr('src', 'assets/images/boardgamepack/PNG/Cards/' + playerCard.image);
	// define an attribute to the variable that assigns the value of the card as a data-value
	cardImage.attr('data-value', playerCard.value);
	// append the image variable to the player-hand div
	$('.player-hand').append(cardImage);

	addPoints(playerCard);
}


function addPoints(playerCard) {
	playerPoints += playerCard.value;
	$('.player-points').text(playerPoints);
}



// This function grabs the value of the key that was extracted in the getCard function
function cardValue(key) {
	console.log('deckObject[key]: '+deckObject[key]);


}

function hitClicked() {
	var hitCard = getCard();
	// console.log(hitCard);

	//generate cards for player when they select the 'hit' button
	generatePlayerCards(hitCard);
	checkPoints();
}


function checkPoints() {
	// console.log('player points at the check function: ' + playerPoints);

	if(playerPoints < 21) {
		$hit.prop('disabled', false);
	} else if (playerPoints > 21){
		$hit.prop('disabled', true);
		alert('You drew ' + playerPoints + "  Bust!!!");
	}
}









