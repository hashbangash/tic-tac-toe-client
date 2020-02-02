'use strict'

const store = require('./../store')
const functions = require('./../functions')
// contains the jQuery to update the webpage

const onCreateGameSuccess = function (response) {
  $('#message').text(`new game!`)
  $('#game-board').show()
  store.game = response.game
  // clear board
  for (let i = 0; i < 9; i++) {
    const box = `[data-cell-index=${i}]`
    $(`${box}`).text('')
  }
  console.log('store after onCreateGameSuccess: ', store)
}
const onCreateGameFailure = function (response) {
  $('#message').text(`try again.`)
  $('#message').addClass('failure')
}

const onUpdateGameSuccess = response => {
  $('#message').text(`added move for ${store.player}`)
  $('#message').addClass('successful')
  const box = `[data-cell-index=${store.move.game.cell.index}]`
  $(`${box}`).text(store.move.game.cell.value)
  store.game = response.game
  // logic that checks for a win
  if (store.numberOfMovesMade > 4) {
    functions.checkForWin()
  }
  functions.updateGameState()
  if (store.game.over) {
    if (store.winner !== undefined) {
      $('#message').text(`${store.winner} wins! click 'play' to play again.`)
    } else {
      $('#message').text('game tied. click `play` to play again.')
      return
    }
  }
  console.log('store after onUpdateGameSuccess: ', store)
}

const onUpdateGameFailure = () => {
  $('#message').text('failed to update game')
  $('#message').addClass('failure')
}

const onIndexOfGamesPlayedSuccess = response => {
  store.gamesFinished = response
  $('#get-games-message').text(`${store.gamesFinished.games.length} games finished`)
  console.log('store after onIndexOfGamesPlayedSuccess: ', store)
}

const onIndexOfGamesPlayedFailure = () => {
  $('#get-games-message').text('failed to get books😭')
  $('#get-games-message').addClass('failure')
}

const onIndexOfAllGamesSuccess = response => {
  store.gamesStarted = response
  $('#get-games-message-2').text(`${store.gamesStarted.games.length} games started`)
  console.log('store after onIndexOfAllGamesSuccess: ', store)
}

const onIndexOfAllGamesFailure = () => {
  $('#get-games-message-2').text('failed to get books😭')
  $('#message').addClass('failure')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onIndexOfGamesPlayedSuccess,
  onIndexOfGamesPlayedFailure,
  onIndexOfAllGamesSuccess,
  onIndexOfAllGamesFailure
}
