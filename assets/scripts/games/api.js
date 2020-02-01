'use strict'

// contains all AJAX calls to the API

// access the API's URL via the config file (dev. & prod. URLs)
const config = require('../config')

const createGame = () => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games'
  })
}

module.exports = {
  createGame
}
