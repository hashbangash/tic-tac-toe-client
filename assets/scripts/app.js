'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./games/events')

// event handlers
$(() => {
  $('#game-board').on('click', gameEvents.onCreateGame)
  $('#game-board').on('click', gameEvents.onUpdateGame)
})
