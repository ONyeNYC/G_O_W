# Game of War

## Description

This is a simple implementation of the card game 'War' using JavaScript classes. The game consists of three main classes: `Card`, `Deck`, and `GameOfWar`.

## Classes

### Card

The `Card` class represents a single playing card with a suit, rank, and score.

- `constructor(suit, rank, score)`: Initializes a new card with the given suit, rank, and score.

### Deck

The `Deck` class represents a deck of playing cards.

- `constructor()`: Initializes an empty array to hold `Card` objects and calls `createDeck()`.
- `createDeck()`: Fills the `cards` array with 52 `Card` objects, one for each suit and rank.
- `shuffle()`: Shuffles the `cards` array.
