$(document).ready(function() {
	console.log('loaded');
	var $balance = $('.player-balance');
	var $bet = $('#bet');
	console.log($bet);
	$balance.text('100.00');

	// when the bet button is clicked, the betClicked function should be invoked.
	$bet.on('click', betClicked);
})

<<<<<<< HEAD
=======
// Array of the card strings
>>>>>>> master
var deck = [
	['cardClubs2.png', 'cardClubs3.png', 'cardClubs4.png', 'cardClubs5.png', 'cardClubs6.png', 'cardClubs7.png', 'cardClubs8.png', 'cardClubs9.png', 'cardClubs10.png', 'cardClubsA.png', 'cardClubsJ.png', 'cardClubsK.png', 'cardClubsQ.png'],
	['cardDiamonds2.png', 'cardDiamonds3.png', 'cardDiamonds4.png', 'cardDiamonds5.png', 'cardDiamonds6.png', 'cardDiamonds7.png', 'cardDiamonds8.png', 'cardDiamonds9.png', 'cardDiamonds10.png', 'cardDiamondsA.png', 'cardDiamondsJ.png', 'cardDiamondsK.png', 'cardDiamondsQ.png']	
];

<<<<<<< HEAD
=======
// Variable for random numbering
var randomNumber = Math.random();

// Variables for the pot, betting and player balance
>>>>>>> master
var $pot = $('.pot');
var potBalance = 0;
var $balance = $('.player-balance');
var balanceNumber = 100.00;
<<<<<<< HEAD
console.log(balanceNumber);
=======
>>>>>>> master
var $bet = $('#bet');

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



	

	// two cards should randomly generate for the player and dealer
}
