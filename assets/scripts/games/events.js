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
  functions.updateGameState()

  if (store.game.over) {
    $('#message').text('game over. click `play` to play again.')
    store.cellIndex = null
    store.player = null
  }

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

  store.move = {
    'game': {
      'cell': {
        'index': store.cellIndex,
        'value': store.player
      },
      'over': store.game.over
    }
  }

  console.log('store after updateGame', store)
  api.updateGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

// event handler listens for when game stats button is clicked
const onIndexOfGamesPlayed = () => {
  api.indexOfGamesPlayed()
    .then(ui.onIndexOfGamesPlayedSuccess)
    .catch(ui.onIndexOfGamesPlayedFailure)
}

// event handler listens for when game stats button 2 is clicked
const onIndexOfAllGames = () => {
  api.indexOfAllGames()
    .then(ui.onIndexOfAllGamesSuccess)
    .catch(ui.onIndexOfAllGamesFailure)
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  onIndexOfGamesPlayed,
  onIndexOfAllGames
}
