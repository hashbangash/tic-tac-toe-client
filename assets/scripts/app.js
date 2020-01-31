'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// const gameEvents = require('./games/events')

const onPlaceSymbol = event => {
  // event has a property called target
  // target has an attribute I created called #data-cell-index
  console.log(event.target.getAttribute('data-cell-index'))
}
// handle events
$(() => {
  $('#game-board').on('click', onPlaceSymbol)
  // $('#books-show').on('submit', bookEvents.onGetBook)
  // $('#books-delete').on('submit', bookEvents.onDeleteBook)
  // $('#books-update').on('submit', bookEvents.onUpdateBook)
  // $('#books-create').on('submit', bookEvents.onCreateBook)
})
