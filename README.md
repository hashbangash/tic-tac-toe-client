# Tic Tac Toe

#### Please view my In-Class Presentation: [Data Flow](https://docs.google.com/presentation/d/1VrIDJJBE6LSg3xalpIAQN0SlWDuvWrLoi6ZCe36Lr18/present?usp=sharing)

## Planning
Before starting, I made a simple architectural diagram based on Mixu's [Single Page App Book](http://singlepageappbook.com/goal.html). This included Model-View file structure and data flow. [Original Model-View Node.js file structure diagram](https://i.imgur.com/XN3zr7a.jpg).

I developed my wireframes and user stories and referenced the GA schedule and requirements.

#### Wireframes & User Stories

[Original wireframes](https://i.imgur.com/uguLEY0.png)

[User Stories](./user_stories.md)

## Software Design/Problem Solving

Throughout the process, I drew almost a dozen different diagrams: file system diagrams for Node.js, data flow diagrams for the event loop and runtime environment, diagrams of my local data storage vs. the API storage, and diagrams of data flow between modularized files.

![Final version MVC Node.js app file data flow](https://i.imgur.com/Ehwj8kN.png)

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

## Stretch Goals
At first, I added two buttons for game statistics, "Games Started" and "Games Finished", which complete two different types of AJAX GET requests. I'm glad I attempted this stretch goal because in debugging process, I learned there were previously so many more bugs in my program that I doubt I would have ever found. This is what started the major refactoring, commenting, simplification, and reorganization process. I only ended up using "Game Started" in the end.


## License
My project has a [GNU General Public License, version 3](https://www.gnu.org/licenses/gpl-3.0.en.html). The type is [Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/), meaning:

You are free to:
* Share — copy and redistribute the material in any medium or format
* Adapt — remix, transform, and build upon the material

Under the following terms:
* Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
* NonCommercial — You may not use the material for commercial purposes.
* ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

More info about this GNU GPLv3 license: Copyright © 2007 [Free Software Foundation, Inc.](https://fsf.org/).

## Dependencies
I broke my dev environment the first day patching a known vulnerability in `webpack`. That's when I learned I just had to accept this vuln and focus on the practice of learning how to build a JS client. Webpack is only used in my dev process and isn't a part of production, so I'm not worried about the vulnerability, for now.

```json
"dependencies": {
  "babel-polyfill": "^6.26.0",
  "bootstrap": "^4.1.2",
  "jquery": "^3.3.1",
  "popper.js": "^1.14.3"
}
```

Since this is my first Node.js app, I'm listing out what each dependency does for my own learning. The `devDependencies` in `package.json` are tools just used for development, not distribution.

**Babel Polyfill**: Transpiles ES6+ code to ES5. A polyfill provides modern functionality for older browsers. Babel is a JS compiler that is now broken into separate small packages. I am just using the polyfill package. Babel is open-source with the MIT license. It is compatible with my project because it can be re-licensed under other licenses. The MIT license is compatible with many copyleft licenses, such as the GNU General Public License (GPL).

**Bootstrap**: Helps with writing CSS so I can use Sass variables and nest CSS styles. I used the grid system for my tic tac toe board. It also has an MIT license.

**jQuery**: Incredibly valuable JS library that simplifies creating event handlers. Instead of writing complex JS commands to select HTML elements and apply events or styling to them, I can write simple jQuery commands. jQuery has an [MIT license](https://jquery.org/license/). "You are free to use the Project in any other project (even commercial projects) as long as the copyright header is left intact."

**popper.js**: Honestly, I'm not sure why this is in my dependencies. I'm not sure I'm even utilizing it, but doing this research helps me understand dependency decisions going forward as a developer. By the way, popper has zero dependencies and helps with positioning of pop-up elements. It has an MIT license.

## Future of this App
I am curious in the future to understand how well my app aligns with Node.js best practices. I've learned that best practices vary on the organization and my style is relatively good practice.
