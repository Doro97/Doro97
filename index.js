// index.js
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

/**
* DATA is the object that contains all the data
* to be provided to Mustache 
* 
 */

let DATA = {
    name: 'Dorothy',
    date: new Date().toLocaleDateString('en-GB', 
    {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
        timeZone: 'Africa/Nairobi'
    }),
};

/**
* A - We open 'main.mustache'
* B - We ask Mustache to render our file to the data
* C - We create a README.md file with the generated output
*/

function generateReadMe(){
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>
    {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
}

generateReadMe();

// Dependencies
var GitHubStats = require("github-stats");

// Create the GitHubStats instance
var stats = new GitHubStats({

    // Enable light theme for calendar
    theme: "LIGHT"

    // Provide the repository and the username
  , repo: "hubber-memory-game"
  , user: "alysonla"

    // Visualize repository, user and calendar stats
  , s_repo: true
  , s_user: true
  , cal: true

    // A token could help to visualize private stats
  , token: "an optional token"
});

// Stringify everything
stats.toString(function (err, output, warns) {
    console.log(err || output);
});