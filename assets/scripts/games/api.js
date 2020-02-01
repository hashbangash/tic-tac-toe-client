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

module.exports = {
  createGame
}
