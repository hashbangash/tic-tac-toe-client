'use strict'

const store = require('./store')

// number of moves made in the current game
const calculateNumMovesMade = function () {
  // get game array from store
  const cells = store.game.cells

  // calculate how many moves have been made
  let numberOfMovesMade = 0
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] !== '') {
      numberOfMovesMade++
    }
  }
  store.numberOfMovesMade = numberOfMovesMade
}

// determine who gets current/next move
const getPlayer = function () {
  const player = (store.numberOfMovesMade % 2) ? 'o' : 'x'
  store.player = player
}

// ensures game board box is open for a valid move.
// returns true if move is legal, false otherwise.
const checkForLegalMove = function () {
  // if the game isn't over and box clicked is empty
  return !store.game.over && store.game.cells[store.cellIndex] === ''
}

// uses the indeces of player's moves to determine if there's a win.
// this method doesn't return anything. it just updates the store.
const checkForWin = function () {
  store.winner = null
  // create arrays for x's moves and o's moves
  const xMoves = []
  const oMoves = []
  for (let i = 0; i < store.game.cells.length; i++) {
    if (store.game.cells[i] === 'x') {
      xMoves.push(i)
    } else if (store.game.cells[i] === 'o') {
      oMoves.push(i)
    }
  }
  // use the arrays already created to see if win conditions exist
  let winner = null
  let moves = xMoves
  let player = 'x'
  for (let j = 0; j < 2; j++) {
    if (j === 1) {
      moves = oMoves
      player = 'o'
    }
    // 3 horizontal wins, 3 vertical wins, & 2 diagonal wins (8 total)
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

  // if winner was found, update the state
  if (winner !== null) {
    store.winner = winner
    store.game.over = true
  }
}

// this checks for end of game. Use store.winner to check if it's
// really a tie or if a player won.
const checkForTie = function () {
  if (store.numberOfMovesMade === 9) {
    store.game.over = true
  }
}

module.exports = {
  calculateNumMovesMade,
  getPlayer,
  checkForLegalMove,
  checkForWin,
  checkForTie
}
