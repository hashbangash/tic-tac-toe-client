'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store')
const functions = require('./../functions')

// event handler listens for when 'play' button is clicked
const onCreateGame = () => {
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

// event handler listens for when a tic tac toe box is clicked
const onUpdateGame = event => {
  if (store.game.over) {
    $('#message').text('game over. click `play` to play again.')
    store.cellIndex = null
    store.player = null
    return
  }

  functions.calculateNumMovesMade()
  functions.getPlayer()
  // event has a property called target
  // target has a HTML data-* attribute I created called #data-cell-index
  const cellIndexStr = event.target.getAttribute('data-cell-index')
  store.cellIndex = parseInt(cellIndexStr, 10)

  const legalMove = functions.checkForLegalMove()
  if (!legalMove) {
    $('#message').text('illegal move. try again.')
    return
  }

  if (!store.game.over) {
    store.numberOfMovesMade++
  }

  // checks for a win based on the new move
  if (store.numberOfMovesMade > 4) {
    functions.checkForWin()
    functions.checkForTie()
  }

  store.move = {
    'game': {
      'cell': {
        'index': store.cellIndex,
        'value': store.player
      },
      'over': store.game.over
    }
  }

  api.updateGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

// event handler listens for when get # of games started button clicked
const onReadIndexOfGamesStarted = () => {
  console.log(store)
  api.readIndexOfGamesStarted()
    .then(ui.onReadIndexOfGamesStartedSuccess)
    .catch(ui.onReadIndexOfGamesStartedFailure)
}

// event handler listens for when get # of games finished button clicked
const onReadIndexOfGamesFinished = () => {
  console.log(store)
  api.readIndexOfGamesFinished()
    .then(ui.onReadIndexOfGamesFinishedSuccess)
    .catch(ui.onReadIndexOfGamesFinishedFailure)
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  onReadIndexOfGamesStarted,
  onReadIndexOfGamesFinished
}
