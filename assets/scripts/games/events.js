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
  // event has a property called target
  // target has a HTML data-* attribute I created called #data-cell-index
  console.log(event.target.getAttribute('data-cell-index'))
  const cellIndexStr = event.target.getAttribute('data-cell-index')
  const cellIndex = parseInt(cellIndexStr, 10)

  console.log('box clicked, user: ', store.user)
  console.log('box clicked, game: ', store.game)
  const player = functions.getPlayer()

  console.log('cell index and player ', cellIndex, player)

  store.move = {
    'game': {
      'cell': {
        'index': cellIndex,
        'value': player
      },
      'over': store.game.over
    }
  }
  console.log('store.move ', store.move)
  api.updateGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
