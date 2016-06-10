$(document).ready(function() {
	console.log('loaded');
	var $balance = $('.player-balance');
	var $bet = $('#bet');
	console.log($bet);
	$balance.text('100.00');

	// when the bet button is clicked, the betClicked function should be invoked.
	$bet.on('click', betClicked);
})


// Array of the card strings

var deck = ['clubs2.png', 'clubs3.png', 'cardClubs4.png', 'cardClubs5.png', 'cardClubs6.png', 'cardClubs7.png', 'cardClubs8.png', 'cardClubs9.png', 'clubs10.png', 'cardClubsA.png', 'cardClubsJ.png', 'cardClubsK.png', 'cardClubsQ.png', 'cardDiamonds2.png', 'cardDiamonds3.png', 'cardDiamonds4.png', 'cardDiamonds5.png', 'cardDiamonds6.png', 'cardDiamonds7.png', 'cardDiamonds8.png', 'cardDiamonds9.png', 'cardDiamonds10.png', 'cardDiamondsA.png', 'cardDiamondsJ.png', 'cardDiamondsK.png', 'cardDiamondsQ.png'];

var deckObject = {
	'clubs2.png': 2,
	'clubs3.png': 3,
	'clubs4.png': 4,
	'clubs5.png': 5,
	'clubs6.png': 6,
	'clubs7.png': 7,
	'clubs8.png': 8,
	'clubs9.png': 9,
	'clubs10.png': 10,
	'clubsJ.png': 10,
	'clubsK.png': 10,
	'clubsQ.png': 10
}


// Variables for the pot, betting and player balance

var $pot = $('.pot');
var potBalance = 0;
var $balance = $('.player-balance');
var balanceNumber = 100.00;
var $bet = $('#bet');
var playerTurn = false;

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
		console.log($balance);
		// update the text of balance to reflect the new sum of balanceNumber
		$balance.text(balanceNumber);
		// update the text of pot to reflect the new sum of potBalance
		$pot.text(potBalance);
	}

	dealCards();
	
}

function dealCards() {  // function to determine how many cards to deal and who to deal them to in the game
	// when invoked, dealer gets a face down card
	var faceDown = getCard();
		// console.log('Dealer face down: ' + faceDown);
		// $('.dealer-hand').append('<img class="face-down" src="assets/images/boardgamepack/PNG/Cards/cardBack_blue2.png"/>');   <= generated the card but did not follow styling set
 	var faceDownImage = $('<img>').attr('src', 'assets/images/boardgamepack/PNG/Cards/cardBack_blue2.png');
 	$('.dealer-hand').append(faceDownImage);

 	//  *********** Need to add the value of the card as an attribute to the image

	// player one gets a face up card
	var playerCard = getCard();

	












	// if(playerCard === faceDown) {  This particular set up didn't account for when the same card was randomly chosen twice in a row for this spot
	// 	playerCard = getCard();
	// };
	// 	generatePlayerCards(playerCard);
	// 	// console.log('player card: ' + playerCard);
	
	// // dealer gets a face up card
	// var faceUp = getCard();
	// if(faceUp === faceDown || faceUp === playerCard) {
	// 	faceUp = getCard();
	// };
	// 	generateDealerCards(faceUp);
	// 	// console.log('face up: ' + faceUp);
	
	// // player one gets last face up card
	// var playerCard2 = getCard();
	// if(playerCard2 === faceDown || playerCard2 === faceUp || playerCard2 === playerCard) {
	// 	playerCard2 = getCard();
	// };
	// 	generatePlayerCards(playerCard2);
		// console.log('player Card 2: ' + playerCard2)
	// $('button').off('#bet');  attempted to prevent the button from being clicked but syntax may not be right
	


}

var $hit = $('#hit');  // if the player clicks the hit button, generate a new card

$hit.on('click', hitClicked); 




function getCard(value) {    // function to create and return a card when invoked
	// Variable for random numbering
	var randomNumber =  Math.floor((Math.random() * 11) + 1);
	// find key by value in an object

	for(var key in deckObject) {
		if(deckObject[key] === randomNumber) {            // Found this for loop on Stack Overflow: http://stackoverflow.com/questions/9907419/javascript-object-get-key-by-value
			var card = key;
			
		}
	}
}

function generateDealerCards(card) {  // Create a function that generates the image tag for the card 
	var cardImage = $('<img>').attr('src', 'assets/images/boardgamepack/PNG/Cards/' + card);
	$('.dealer-hand').append(cardImage);

};

function generatePlayerCards(card) {
	var cardImage = $('<img>').attr('src', 'assets/images/boardgamepack/PNG/Cards/' + card);
	$('.player-hand').append(cardImage);
}

function hitClicked() {
	var hitCard = getCard();
	// console.log(hitCard);
	generatePlayerCards(hitCard);

	

}









