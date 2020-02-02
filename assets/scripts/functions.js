'use strict'

const store = require('./store')
// getPlayer: function to get the player who's turn it is

// uses data from store.js:
// cells: should be in form ["x","o","","","","","","",""]
// over: true if game is over, false otherwise

// returns:
// returns null if game is over
// returns string value 'x' or 'o' if game is not over

const updateGameState = function () {
  console.log('store before updateGameState', store)
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
  store.numberOfMovesMade = numberOfMovesMade

  // logic that checks for a tie
  if (numberOfMovesMade === 9) {
    store.game.over = true
  }

  // if the game is over, return null
  if (over === true) {
    return null
  }

  const player = (numberOfMovesMade % 2) ? 'o' : 'x'
  store.player = player
  console.log('store after updateGameState', store)
}

const checkForLegalMove = function () {
  return store.game.cells[store.cellIndex] === ''
}

// const checkForWin = function () {
//   store.game.over = false
// }

module.exports = {
  updateGameState,
  checkForLegalMove
}
