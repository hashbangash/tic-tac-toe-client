'use strict'

// const getFormFields = require('./../../../lib/get-form-fields.js')

const api = require('./api')
const ui = require('./ui')

// event handler listens for when 'play' button is clicked
const onCreateGame = event => {
  api.createGame()
    .then(ui.onCreateGameSuccessful)
    .catch(ui.onCreateGameFailure)
}

// event handler listens for when a box is clicked
const onUpdateGame = event => {
  // event has a property called target
  // target has an attribute I created called #data-cell-index
  console.log(event.target.getAttribute('data-cell-index'))
  const cellIndex = event.target.getAttribute('data-cell-index')
  const player = event.target
  // {
  //   "game": {
  //     "cell": {
  //       "index": 0,
  //       "value": "x"
  //     },
  //     "over": false
  //   }
  // }
  api.createGame(cellIndex, player)
    .then(ui.onCreateGameSuccessful)
    .catch(ui.onCreateGameFailure)
}

module.export = {
  onCreateGame,
  onUpdateGame
}
