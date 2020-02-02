#!/bin/bash
# TOKEN='' INDEX=0 PLAYER='x' GAME_STATE=false ID= sh curl-scripts/games/update.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
 --include \
 --request PATCH \
 --header "Content-type: application/json" \
 --header "Authorization: Token token=${TOKEN}" \
 --data '{
   "game": {
     "cell": {
       "index": "'"${INDEX}"'",
       "value": "'"${PLAYER}"'"
     },
     "over": "'"${GAME_STATE}"'"
   }
 }'

echo
