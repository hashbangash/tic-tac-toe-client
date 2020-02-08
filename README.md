# Tic Tac Toe

#### Please view my In-Class Presentation: [Data Flow](https://docs.google.com/presentation/d/1VrIDJJBE6LSg3xalpIAQN0SlWDuvWrLoi6ZCe36Lr18/edit?usp=sharing)

## Planning
Before starting, I made a simple architectural diagram based on Mixu's [Single Page App Book](http://singlepageappbook.com/goal.html). This included Model-View file structure and data flow.

![Model-View Node.js file structure](https://i.imgur.com/XN3zr7a.jpg)

I developed my wireframes and user stories and referenced the GA schedule and requirements.

#### Wireframes

![Original wireframes](https://i.imgur.com/uguLEY0.png)

#### User Stories

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

## Software Design/Problem Solving

Throughout the process, I drew almost a dozen different diagrams: file system diagrams for Node.js, data flow diagrams for the event loop and runtime environment, diagrams of my local data storage vs. the API storage, and diagrams of data flow between modularized files.

![My personal data flow diagram](https://i.imgur.com/D7vrhzD.jpg)

It took about 20 hours of coding to fully understand the entire data flow system for a Node.js app with multiple AJAX requests. I ran through many experiments of when, how, and where to store and retrieve data. I am happy with how I was able to simplify my data and functions into the `store.js` and `functions.js` to embrace very clean modularity and readability of my code. For example, I decided, as an experiment on this project, that I would neither accept any parameters into any functions, neither return any values from any functions. I decided I would only reference local storage in order to experiemnt with this coding strategy. At first, it was challenging to manage state this way, but I'm really happy with how it stretched my mind.

I was blocked at two points throughout the process.
1. On the first day, I updated the version of `webpack` to solve a security issue which broke my local testing environment with `grunt`. It was fun to break and then fix my Node app, which required manually reverting the `webpack` version number, deleting all my node modules (`rm -rf` YAY) and reinstalling `npm` to create all new mode modules.
2. Another time I was blocked because I hadn't carefully planned out my data flow and storage and had lost the big picture view of my app, but I learned to post a Github Issue and follow the trail to a careful reconstruction of my codebase.

## Code Clarity

I am proud of my naming, spacing, and commenting and gave consciousness to every line of code in the project.

## Creativity

I am happy to use Google Fonts for this project and to understand `.ttf` files, where they belong, and how to link to them in Bootstrap. I also practiced proper link attribution using `a` tags of some freely-licensed images that I added in the file structure. While I didn't end up using the images and opted for a more 1980s 8-bit style, I was happy to learn the process.

## Technical Requirements

I believe I completed all the MVP project requirements and there are no bugs.

## Stretch Goals Completed
 At first, I added two buttons for game statistics, "Games Started" and "Games Finished", which complete two different types of AJAX GET requests. I'm glad I attempted this stretch goal because in debugging process, I learned there were previously so many more bugs in my program that I doubt I would have ever found. This is what started the major refactoring, commenting, simplification, and reorganization process. I only ended up using "Game Started" in the end.

## Future of this App
I am curious in the future to understand how well my app aligns with Node.js best practices. I've learned that best practices vary on the organization and my style is relatively good practice.
