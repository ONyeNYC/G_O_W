# Game of War

## Description

This is a simple implementation of the card game 'War' using JavaScript classes. The game consists of three main classes: `Card`, `Deck`, and `GameOfWar`.

## Technologies Used

HTML & Javascript

## Classes

### Card

The `Card` class represents a single playing card with a suit, rank, and score.

- `constructor(suit, rank, score)`: Initializes a new card with the given suit, rank, and score.

### Deck

The `Deck` class represents a deck of playing cards.

- `constructor()`: Initializes an empty array to hold `Card` objects and calls `createDeck()`.
- `createDeck()`: Fills the `cards` array with 52 `Card` objects, one for each suit and rank.
- `shuffle()`: Shuffles the `cards` array.

### GameOfWar

The `GameOfWar` class represents the game logic.

- `constructor()`: Initializes player decks and the pile for 'war' scenarios.
- `gameSetup()`: Divides the deck between two players.
- `war()`: Handles the 'war' scenario.
- `play()`: The main game loop.

## Usage

```javascript
const myGame = new GameOfWar();
myGame.play();
```

This will start a new game and run it until one player wins.
