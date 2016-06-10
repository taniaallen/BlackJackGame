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

var deck = ['cardClubs2.png', 'cardClubs3.png', 'cardClubs4.png', 'cardClubs5.png', 'cardClubs6.png', 'cardClubs7.png', 'cardClubs8.png', 'cardClubs9.png', 'cardClubs10.png', 'cardClubsA.png', 'cardClubsJ.png', 'cardClubsK.png', 'cardClubsQ.png', 'cardDiamonds2.png', 'cardDiamonds3.png', 'cardDiamonds4.png', 'cardDiamonds5.png', 'cardDiamonds6.png', 'cardDiamonds7.png', 'cardDiamonds8.png', 'cardDiamonds9.png', 'cardDiamonds10.png', 'cardDiamondsA.png', 'cardDiamondsJ.png', 'cardDiamondsK.png', 'cardDiamondsQ.png'];



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
 
	// player one gets a face up card
	var playerCard = getCard();

	if(playerCard === faceDown) {
		playerCard = getCard();
	};
	

		// console.log('player card: ' + playerCard);
	
	// dealer gets a face up card
	var faceUp = getCard();
	if(faceUp === faceDown || faceUp === playerCard) {
		faceUp = getCard();
	};
		// console.log('face up: ' + faceUp);
	
	// player one gets last face up card
	var playerCard2 = getCard();
	if(playerCard2 === faceDown || playerCard2 === faceUp || playerCard2 === playerCard) {
		playerCard2 = getCard();
	};
		// console.log('player Card 2: ' + playerCard2)

}



function getCard() {    // function to create and return a card when invoked
	// Variable for random numbering
	var randomNumber =  Math.floor(Math.random() * 26);
	// pop item out of array?
	//return random card
	var card = deck[randomNumber];
	return card;
}

function generateCards() {
	
}







