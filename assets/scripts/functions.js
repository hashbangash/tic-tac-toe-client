'use strict'

const store = require('./store')

// getPlayer: function to get the player who's turn it is

// uses data from store.js:
// cells: should be in form ["x","o","","","","","","",""]
// over: true if game is over, false otherwise

// returns:
// returns null if game is over
// returns string value 'x' or 'o' if game is not over

const getPlayer = function () {
  // get game data from store
  const cells = store.game.cells
  const over = store.game.over

  // calculate how many moves have been made
  let numberOfMovesMade = 0
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] !== '') {
      numberOfMovesMade++
    }
  }

  // if the game is over, return null
  if (over === true) {
    return null
  }

  // return the correct player as a string
  return (numberOfMovesMade % 0) ? 'o' : 'x'
}

module.exports = {
  getPlayer
}
