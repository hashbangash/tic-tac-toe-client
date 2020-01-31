'use strict'

// const getFormFields = require('./../../../lib/get-form-fields.js')

// const api = require('./api')
// const ui = require('./ui')

// the event handler when the getBooks button is pressed
const onPlaceSymbol = event => {
  console.log('i was clicked!')
  console.log(event, event.target)
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

/*
{
  book: {
    title: "<whatever was entered in the title input >",
    author: "<whatever was entered in the author input>"
  }
}
*/

module.export = {
  onPlaceSymbol
}
