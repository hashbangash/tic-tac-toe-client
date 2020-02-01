#!/bin/bash

curl --include --request PATCH https://tic-tac-toe-wdi.herokuapp.com/ \
 --header "Content-type: application/json" \
 --header "Authorization: Token token=${TOKEN}" \
 --data `{
  "game": {
    "id": 3,
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": `${ID}`,
      "email": `${EMAIL}`
    },
    "player_o": null
  }
}`

echo
