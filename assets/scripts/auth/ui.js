'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(`${response.user.email} successfully signed up!`)
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

const onSignUpFailure = function (response) {
  $('#message').text(`sign up failed. try again.`)
  $('#message').removeClass()
  $('#message').addClass('failure-message')
}

const onSignInSuccess = function (response) {
  $('#message').text(`${response.user.email} successfully signed in!`)
  $('#sign-up').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#play-button').show()
  store.user = response.user
  console.log('token ', response.user.token)
}

const onSignInFailure = function (response) {
  $('#message').text(`sign in failed. try again.`)
}

const onChangePasswordSuccess = function (response) {
  $('#message').text(`successfully changed password!`)
}

const onChangePasswordFailure = function (response) {
  $('#message').text(`change password failed. try again.`)
}

const onSignOutSuccess = function (response) {
  $('#message').text(`successfully signed out!`)
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#play-button').hide()
  $('#game-board').hide()
  // set the locally stored user data to null
  store.user = null
}

const onSignOutFailure = function (response) {
  $('#message').text(`sign out failed. try again.`)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
