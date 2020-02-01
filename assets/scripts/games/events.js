'use strict'

// const getFormFields = require('./../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./../store')

// event handler listens for when 'play' button is clicked
const onCreateGame = event => {
  console.log('in events')
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

// event handler listens for when a box is clicked
const onUpdateGame = event => {
  // event has a property called target
  // target has an attribute I created called #data-cell-index
  console.log(event.target.getAttribute('data-cell-index'))
  // const cellIndex = event.target.getAttribute('data-cell-index')

  // gameState array keeps track of number of valid moves made in a
  // game
  // let player
  // (store.gameState.length % 0) ? player = 'x' : player = 'o'

  // api.createGame(cellIndex, player)
  //   .then(ui.onCreateGameSuccessful)
  //   .catch(ui.onCreateGameFailure)
}

module.export = {
  onCreateGame,
  onUpdateGame
}
