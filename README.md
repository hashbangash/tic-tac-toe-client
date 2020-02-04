# Tic Tac Toe

## Planning
Before starting, I made a simple architectural diagram based on Mixu's [Single Page App Book](http://singlepageappbook.com/goal.html). This included Model-View file structure and data flow. Throughout the process, I drew almost a dozen different diagrams: file system diagrams for Node.js, data flow diagrams for the event loop and runtime environment, diagrams of my local data storage vs. the API storage, and diagrams of data flow between modularized files.

It took about 20 hours of coding to fully understand the entire data flow system for a Node.js app with multiple AJAX requests. I ran through many experiments of when, how, and where to store and retrieve data. I am happy with how I was able to simplify my data and functions into the `store.js` and `functions.js` to embrace very clean modularity and readability of my code. For example, I decided, as an experiment on this project, that I would neither accept any parameters into any functions, neither return any values from any functions. I decided I would only reference local storage in order to experiemnt with this coding strategy. At first, it was challenging to manage state this way, but I'm really happy with how it stretched my mind.

I am curious in the future to understand how well my app aligns with Node.js best practices.

I believe that I completed all the MVP project requirements.

## Wireframes
![Sign In Page](https://i.imgur.com/gIcKNJu.jpg)
![Signed In](https://i.imgur.com/YlKc2ra.jpg)
![Playing Game](https://i.imgur.com/KJ3o6u4.jpg)

## User Stories
* As an unregistered player, I want to sign up with a username and password.
* As a registered player, I want to log in with username and password.
* As a signed-in player, I want to change my password using my old password.
* As a signed-in player, I want to sign out.
* As a signed-in player, I want to click to start a new game.
* As a signed-in player, I want to click to add an 'x' or 'o' to the board. X goes first.
* As a signed-in player, I don't want the other player to steal a spot that I've already claimed.
* As a signed-in player, I want to win when I have 3 in a row.
* As a signed-in player, if there's a tie, I want the game to be over.
* As a signed-in player, I don't want to be able to add symbols once the game is over.
* As a signed-in player, I want to reset the board and play again.
* As a signed-in player, I want to know how many games I've played total.
