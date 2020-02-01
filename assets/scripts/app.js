'use strict'

// import event handlers from events.js to create jQuery event listeners
const gameEvents = require('./games/events')
const authEvents = require('./auth/events')
const store = require('./store')
const config = require('./config')

const createGame = () => {
  console.log(config.apiUrl)
  return $.ajax({
    url: `${config.apiUrl}/games`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: '{}'
  })
}

const onCreateGameSuccess = function (response) {
  $('#message').text(`successfully clicked play!`)
  $('#game-board').show()
  console.log(gameEvents)
}
const onCreateGameFailure = function (response) {
  $('#message').text(`try again.`)
}

const onCreateGame = () => {
  console.log('in events')
  createGame()
    .then(onCreateGameSuccess)
    .catch(onCreateGameFailure)
}

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
  $('#play-button').on('click', onCreateGame)
  // $('#game-board').on('click', gameEvents.onUpdateGame)
})
