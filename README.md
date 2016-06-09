# The Game of Black Jack

![alt=wireframe](https://github.com/taniaallen/BlackJackGame/blob/master/blackjack_wireframe.jpg)

## Synopsis

The game of Black Jack is one of luck and risk. The object of the game, as described by [Wikipedia](https://en.wikipedia.org/wiki/Blackjack), is to beat the dealer in one of the following ways:

> - Get 21 points on the player's first two cards (called a "blackjack" or "natural"), without a dealer blackjack;
> - Reach a final score higher than the dealer without exceeding 21; or
> - Let the dealer draw additional cards until his or her hand exceeds 21.

#### To accomplish the basic function of the Black Jack game, the following will be considered:

- An input field for the user to enter their name
- A field to demonstrate their balance. User will start with $100 by default.
- A field to demonstrate the points they have during a game.
- A field to demonstrate the points the dealer has accrued during the game.
- The game will need to utilize 52 cards, stored in arrays for the game to pull randomly during a round.
- A button to start the game and place two cards on the table for the player and the dealer.
- A button to allow the user to "stand" or no longer accept new cards.
- A button to allow the user to "hit" or accept another card.
- A button for the user to bet more money. Each new game will deduct $10 from the user's balance. If the user selects the   "bet" button, the the program should deduct $10 from their balance and display the current pot on the screen.
- If the user selects the "hit" button, the points field should check the player's current hand and update the points based on the new sum.

#### Possible winning scenarios.

- An if statement may need to be used to monitor each players hand. If the player's hand reaches 21, then the player wins,   otherwise the game should continue.
- If the dealer's hand reaches 21, then the dealer wins, otherwise the game should continue.
- If the player's points and the dealer's points are the same, then the screen should display a tie. Otherwise the game      should continue.
- If either user goes over 21, then that user loses. Otherwise the game should continue.
- The user with the highest score (still under 21) at the end of a game wins.
- The dealer should continue to deal itself a card until they at least reach 17 points.

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out how your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

Black Jack is a fun game. I chose to try my hand at building this game from scratch because I enjoy playing it myself and wanted a challenge that appealed to me.

## Installation

Provide code examples and explanations of how to get the project.

## API Reference

####Boardgame pack v2 by Kenney Vleugels (www.kenney.nl)

JQuery will be utilized for the interactive functionality of the program.


