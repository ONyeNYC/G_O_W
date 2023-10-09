class Card {
  constructor(suit, rank, score) {
    this.suit = suit; // Assigns the suit argument to the suit property of the Card instance.
    this.rank = rank; // Assigns the rank argument to the rank property of the Card instance.
    this.score = score; // Assigns the score argument to the score property of the Card instance.
  }
}

class Deck {
  constructor() {
    this.cards = []; // Initializes an empty array to hold Card objects.
    this.createDeck(); // Calls the createDeck method to fill the cards array.
  }

  createDeck() {
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"]; // Array of card suits.
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ]; // Array of card ranks.

    for (let i = 0; i < suits.length; i++) {
      // Loops through each suit.
      for (let j = 0; j < ranks.length; j++) {
        // Nested loop: loops through each rank for the current suit.
        const card = new Card(suits[i], ranks[j], j + 2); // Creates a new Card object for the current suit and rank, with a score of j + 2.
        this.cards.push(card); // Adds the new Card object to the cards array.
      }
    }

    this.shuffle(); // Calls the shuffle method to randomize the order of the cards array.
  }

  shuffle() {
    const cards = this.cards; // Local reference to the cards array.

    for (let i = cards.length - 1; i > 0; i--) {
      // Loops backward through the cards array.
      const j = Math.floor(Math.random() * (i + 1)); // Generates a random index between 0 and i.
      let temp = cards[i]; // Temporary storage of the card at index i.
      cards[i] = cards[j]; // Swaps the card at index i with the card at index j.
      cards[j] = temp; // Completes the swap by assigning the temporary storage to index j.
    }
  }
}

class GameOfWar {
  constructor() {
    this.p1 = []; // Initializes an empty array to hold player 1's cards.
    this.p2 = []; // Initializes an empty array to hold player 2's cards.
    this.pile = []; // Initializes an empty array to hold cards during a war.
    this.gameSetup(); // Calls the gameSetup method to divide the cards between the two players.
  }

  gameSetup() {
    const gameDeck = new Deck(); // Creates a new Deck object.
    this.p1.push(...gameDeck.cards.splice(0, 26)); // Removes the first 26 cards from gameDeck and adds them to player 1's deck.
    this.p2.push(...gameDeck.cards); // Adds the remaining cards to player 2's deck.
  }

  war() {
    if (this.p1.length < 4 || this.p2.length < 4) {
      // Checks if either player has fewer than 4 cards.
      if (this.p1.length < 4) {
        // Checks if player 1 has fewer than 4 cards.
        // Player 1 loses, player 2 gets all the cards.
        console.log("Not enough P1", this.p1); // Logs a message and player 1's remaining cards.
        this.p2.push(...this.p1.splice(0, this.p1.length), ...this.pile); // Moves all cards from player 1 and the pile to player 2.
      } else {
        // Player 2 has fewer than 4 cards.
        // Player 2 loses, player 1 gets all the cards.
        console.log("Not enough P2", this.p2); // Logs a message and player 2's remaining cards.
        this.p1.push(...this.p2.splice(0, this.p2.length), ...this.pile); // Moves all cards from player 2 and the pile to player 1.
      }
    } else {
      // Both players have at least 4 cards.
      const p1WarCards = this.p1.splice(this.p1.length - 3, 3); // Removes the top 3 cards from player 1's deck.
      const p2WarCards = this.p2.splice(this.p2.length - 3, 3); // Removes the top 3 cards from player 2's deck.

      this.pile.push(...p1WarCards, ...p2WarCards); // Adds the war cards to the pile.
    }
  }

  play() {
    while (this.p1.length > 0 && this.p2.length > 0) {
      // Continues as long as both players have cards.
      const p1Card = this.p1.pop(); // Removes and gets the top card of player 1's deck.
      const p2Card = this.p2.pop(); // Removes and gets the top card of player 2's deck.

      if (p1Card.score === p2Card.score) {
        // Checks if the scores are equal, indicating a war.
        console.log("Time for war!"); // Logs a message indicating a war.
        this.pile.push(p1Card, p2Card); // Adds the tied cards to the pile.
        this.war(); // Calls the war method to handle the war.
      } else if (p1Card.score > p2Card.score) {
        // Player 1 wins this round.
        // Player 1 gets both cards, plus any cards in the pile.
        this.p1.unshift(p2Card, p1Card, ...this.pile); // Adds the won cards to the front of player 1's deck.
        this.pile.length = 0; // Empties the pile.
      } else {
        // Player 2 wins this round.
        // Player 2 gets both cards, plus any cards in the pile.
        this.p2.unshift(p1Card, p2Card, ...this.pile); // Adds the won cards to the front of player 2's deck.
        this.pile.length = 0; // Empties the pile.
      }
    }

    if (this.p1.length > 0) {
      // Checks if player 1 has cards, indicating they won.
      console.log(
        `Player 1 has won!!! They have ${this.p1.length} cards in their deck. P2 has ${this.p2.length}`
      ); // Logs a victory message for player 1.
    } else {
      // Player 2 won.
      console.log(
        `Player 2 has won!!! They have ${this.p2.length} cards in their deck. P1 has ${this.p1.length}`
      ); // Logs a victory message for player 2.
    }
  }
}
// const myGame = new GameOfWar(); // Creates a new GameOfWar object and assigns it to myGame.
// // console.log(myGame); // (Commented out)

const myGame = new GameOfWar(); // Creates a new GameOfWar object and assigns it to myGame.
myGame.play(); // Starts the game.
