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
  // get game data from store
  const cells = store.game.cells

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

  const player = (numberOfMovesMade % 2) ? 'o' : 'x'
  store.player = player
}

const checkForLegalMove = function () {
  return store.game.cells[store.cellIndex] === ''
}

const checkForWin = function () {
  const xMoves = []
  const oMoves = []
  for (let i = 0; i < store.game.cells.length; i++) {
    if (store.game.cells[i] === 'x') {
      xMoves.push(i)
    } else if (store.game.cells[i] === 'o') {
      oMoves.push(i)
    }
  }
  let winner
  let moves = xMoves
  let player = 'x'
  for (let j = 0; j < 2; j++) {
    if (j === 1) {
      moves = oMoves
      player = 'o'
    }
    if (moves.includes(0) && moves.includes(3) && moves.includes(6)) {
      winner = player
    } else if (moves.includes(1) && moves.includes(4) && moves.includes(7)) {
      winner = player
    } else if (moves.includes(2) && moves.includes(5) && moves.includes(8)) {
      winner = player
    } else if (moves.includes(0) && moves.includes(1) && moves.includes(2)) {
      winner = player
    } else if (moves.includes(3) && moves.includes(4) && moves.includes(5)) {
      winner = player
    } else if (moves.includes(6) && moves.includes(7) && moves.includes(8)) {
      winner = player
    } else if (moves.includes(0) && moves.includes(4) && moves.includes(8)) {
      winner = player
    } else if (moves.includes(2) && moves.includes(4) && moves.includes(6)) {
      winner = player
    }
  }
  if (winner !== undefined) {
    store.game.over = true
    store.winner = winner
  }
}

module.exports = {
  updateGameState,
  checkForLegalMove,
  checkForWin
}
