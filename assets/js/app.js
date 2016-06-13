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


var deckObject = [];


// Variables for the pot, betting, points and player balance

var $pot = $('.pot');
var potBalance = 0;
var $balance = $('.player-balance');
var balanceNumber = 100;
var $bet = $('#bet');
var playerTurn = false;
var playerPoints = 0;
var dealerPoints = 0;


function betClicked() {
	if(deckObject.length === 0) {
		resetDeck();
	}
	$('.message').text('');

	// 10.00 should be placed in the pot
	if (balanceNumber === 0) {
		$('.message').text('You have no more funds to play!');
		resetTable();
		resetDeck();
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
	if(dealerPoints === 0) {
		var faceDown = getCard();
		// store the value of the face down card
		var faceDownValue = faceDown.value;
		dealerPoints += faceDown.value;
		// Generate the down facing card for the dealer
		var faceDownImage = $('<img>').attr('src', 'assets/images/boardgamepack/PNG/Cards/cardBack_blue2.png');
		faceDownImage.attr('card', faceDown.image);
		faceDownImage.attr('data-value', faceDown.value);

		$('.dealer-hand').append(faceDownImage);


	}
	
 		//  *********** Need to add the value of the card as an attribute to the image


	// player one gets a face up card
	var playerCard = getCard();
	setTimeout(function() {
		generatePlayerCards(playerCard);
	}, 500);

	var dealerCard = getCard();
	setTimeout(function() {
		generateDealerCards(dealerCard);
	}, 1000);


	var playerCard2 = getCard();
	setTimeout(function() {
		generatePlayerCards(playerCard2);
	}, 1500);
}



var $hit = $('#hit');  // if the player clicks the hit button, generate a new card

$hit.on('click', hitClicked); 




function getCard(image) {    // function to create and return a card image when invoked
	// Variable for random numbering
	if(deckObject.length === 0) {
		resetDeck();
	}
	var randomNumber =  Math.floor(Math.random() * deckObject.length);
	var card = deckObject.splice(randomNumber, 1);
	// get card image name
	return card[0];
}

function generateDealerCards(dealerCard) {  // Create a function that generates the image tag for the card 
	var cardImage = $('<img>').attr('src', 'assets/images/boardgamepack/PNG/Cards/' + dealerCard.image);
	
	$('.dealer-hand').append(cardImage);

};

function generatePlayerCards(playerCard) {
	// create a variable to piece together the image tag for the card.
	var cardImage = $('<img>').attr('src', 'assets/images/boardgamepack/PNG/Cards/' + playerCard.image);
	
	// append the image variable to the player-hand div
	$('.player-hand').append(cardImage);

	addPoints(playerCard);
}


function addPoints(playerCard) {
	// To account for Aces, if the total points exceeds 21 when the Ace is 11, then change the Ace's value to 1 before tallying points.
	if(playerCard.value === 11 && (playerPoints + 11) > 21) {
		playerCard.value = 1;
	}
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
	setTimeout(function() {
		generatePlayerCards(hitCard);
		checkPoints();
	}, 500);
	
}


function checkPoints() {
	// console.log('player points at the check function: ' + playerPoints);

	if(playerPoints < 21) {
		$hit.prop('disabled', false);
	} else if (playerPoints > 21){
		$hit.prop('disabled', true);
		$('.message').text('You drew ' + playerPoints + ", you bust!!!");
		potBalance = 0;
		$pot.text(potBalance);
		$(".player-points").text(potBalance);
		playerPoints = 0;
		dealerPoints = 0;
		$('.dealer-points').text(dealerPoints);
		setTimeout(function() {
			resetTable();
		}, 1500);

	} else if (playerPoints === 21) {
		$hit.prop('disabled', true);
		$('.message').text('You drew ' + playerPoints + "  You Win!!!");
		balanceNumber += 20;
		$balance.text(balanceNumber);
		potBalance = 0;
		$pot.text(potBalance);
		$(".player-points").text(potBalance);
		playerPoints = 0;
		setTimeout(function() {
			resetTable();
		}, 1500);
	}

}




// When the stand button is clicked:

var $stand = $('#stand');

$stand.on('click', dealerTurn);


function dealerTurn() {
	$hit.prop('disabled', true);
	$bet.prop('disabled', true);
	$stand.prop('disabled', true);

	if(dealerPoints < 17) {
		var dealerCard = getCard();
		generateDealerCards(dealerCard);
		
		// Account for the Aces in the dealer's turn similar to line 131
		if(dealerCard.value === 11 && (dealerPoints + 11) > 21) {
			dealerCard.value = 1;
		}
		dealerPoints += dealerCard.value;
		dealerTurn();
	} else {
		if(playerPoints > dealerPoints || dealerPoints > 21) {
			$('.message').text('You beat the dealer, you win!!!');
			balanceNumber += 20;
		} else if(playerPoints === dealerPoints) {
			$('.message').text('You tied with the house!');
			// console.log(balanceNumber);
			balanceNumber += 10;
		} else if (dealerPoints === 17 || dealerPoints > playerPoints) {
			$('.message').text('Dealer has more points, you lose!');
		}
		console.log(dealerPoints);

		$('.dealer-points').text(dealerPoints);

		$balance.text(balanceNumber);
		potBalance = 0;
		$pot.text(potBalance);
		playerPoints = 0;
		$(".player-points").text(potBalance);
		dealerPoints = 0;
		setTimeout(function() {
			resetTable();
		}, 1500);
	}

	

	
}


function resetTable() {
	$('.dealer-hand img').remove();
	$('.player-hand img').remove();
	
	$bet.prop('disabled', false);
	$stand.prop('disabled', false);

}


function resetDeck() {
	deckObject = [
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
		},
		{
			image : 'clubsA.png',
			value : 11
		},
		{
			image : 'diamonds2.png',
			value : 2
		},
		{
			image : 'diamonds3.png',
			value : 3
		},
		{
			image : 'diamonds4.png',
			value : 4
		},
		{
			image : 'diamonds5.png',
			value : 5
		},
		{
			image : 'diamonds6.png',
			value : 6
		},
		{
			image : 'diamonds7.png',
			value : 7
		},
		{
			image : 'diamonds8.png',
			value : 8
		},
		{
			image : 'diamonds9.png',
			value : 9
		},
		{
			image : 'diamonds10.png',
			value : 10
		},
		{
			image : 'diamondsJ.png',
			value : 10
		},
		{
			image : 'diamondsK.png',
			value : 10
		},
		{
			image : 'diamondsQ.png',
			value : 10
		},
		{
			image : 'diamondsA.png',
			value : 11
		},
		{
			image : 'hearts2.png',
			value : 2
		},
		{
			image : 'hearts3.png',
			value : 3
		},
		{
			image : 'hearts4.png',
			value : 4
		},
		{
			image : 'hearts5.png',
			value : 5
		},
		{
			image : 'hearts6.png',
			value : 6
		},
		{
			image : 'hearts7.png',
			value : 7
		},
		{
			image : 'hearts8.png',
			value : 8
		},
		{
			image : 'hearts9.png',
			value : 9
		},
		{
			image : 'hearts10.png',
			value : 10
		},
		{
			image : 'heartsJ.png',
			value : 10
		},
		{
			image : 'heartsK.png',
			value : 10
		},
		{
			image : 'heartsQ.png',
			value : 10
		},
		{
			image : 'heartsA.png',
			value : 11
		},
		{
			image : 'spades2.png',
			value : 2
		},
		{
			image : 'spades3.png',
			value : 3
		},
		{
			image : 'spades4.png',
			value : 4
		},
		{
			image : 'spades5.png',
			value : 5
		},
		{
			image : 'spades6.png',
			value : 6
		},
		{
			image : 'spades7.png',
			value : 7
		},
		{
			image : 'spades8.png',
			value : 8
		},
		{
			image : 'spades9.png',
			value : 9
		},
		{
			image : 'spades10.png',
			value : 10
		},
		{
			image : 'spadesJ.png',
			value : 10
		},
		{
			image : 'spadesK.png',
			value : 10
		},
		{
			image : 'spadesQ.png',
			value : 10
		},
		{
			image : 'spadesA.png',
			value : 11
		}
	]

}

// Areas that could be refactored
// a function for clearing points
// a function for clearing text




