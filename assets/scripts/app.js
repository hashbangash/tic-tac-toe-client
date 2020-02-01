'use strict'

// import event handlers from events.js to create jQuery event listeners
const gameEvents = require('./games/events')
const authEvents = require('./auth/events')

// event handlers
$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#play-button').hide()
  $('#game-board').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#game-board').on('click', gameEvents.onCreateGame)
  $('#game-board').on('click', gameEvents.onUpdateGame)
})
