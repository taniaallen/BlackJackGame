$(document).ready(function() {
	console.log('loaded');

	var $bet = $('#bet');
	console.log($bet);
	
	$bet.on('click', betClicked);
})


function betClicked() {
	console.log('bet button clicked');
}
