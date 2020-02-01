'use strict'

// contains all AJAX calls to the API

// access the API's URL via the config file (dev. & prod. URLs)
const config = require('./../config')
const store = require('./../store')

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

const updateGame = () => {
  console.log(`${config.apiUrl}/games/${store.game.id}`)
  console.log(`Token token=${store.user.token}`)
  console.log(store.move)
  return $.ajax({
    url: `${config.apiUrl}/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: store.move
  })
}

module.exports = {
  createGame,
  updateGame
}
