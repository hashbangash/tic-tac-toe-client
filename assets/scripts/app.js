'use strict'

// import event handlers
const gameEvents = require('./games/events')
const authEvents = require('./auth/events')

$(() => {
  // initial page display
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#play-button').hide()
  $('#game-board').hide()
  $('#get-games-button').hide()
  $('#get-games-button-2').hide()

  // create auth event handlers
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // create game event handlers
  $('#play-button').on('click', gameEvents.onCreateGame)
  $('#game-board').on('click', gameEvents.onUpdateGame)
  $('#get-games-button').on('click', gameEvents.onIndexOfGamesPlayed)
  $('#get-games-button-2').on('click', gameEvents.onIndexOfAllGames)
})
