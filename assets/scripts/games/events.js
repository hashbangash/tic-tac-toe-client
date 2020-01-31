'use strict'

// const getFormFields = require('./../../../lib/get-form-fields.js')

// const api = require('./api')
// const ui = require('./ui')

// event handler when a box is clicked
const onCreateGame = event => {
  // event has a property called target
  // target has an attribute I created called #data-cell-index
  console.log(event.target.getAttribute('data-cell-index'))
  // {
  //   "game": {
  //     "cell": {
  //       "index": 0,
  //       "value": "x"
  //     },
  //     "over": false
  //   }
  // }
  // api.get()
  //   .then(ui.onPlaceSymbolSuccessful)
  //   .catch(ui.onPlaceSymbolFailure)
}

// event handler when a box is clicked
const onUpdateGame = event => {
  // event has a property called target
  // target has an attribute I created called #data-cell-index
  console.log(event.target.getAttribute('data-cell-index'))
  // {
  //   "game": {
  //     "cell": {
  //       "index": 0,
  //       "value": "x"
  //     },
  //     "over": false
  //   }
  // }
  // api.get()
  //   .then(ui.onPlaceSymbolSuccessful)
  //   .catch(ui.onPlaceSymbolFailure)
}

module.export = {
  onCreateGame,
  onUpdateGame
}
