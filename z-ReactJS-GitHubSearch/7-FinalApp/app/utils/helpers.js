/* Axios is a convenient NPM package for performing HTTP requests*/
var axios = require("axios");

// Here we have two functions for querying for user and repo information to the GitHub website.
function getRepos(username) {
  return axios.get("https://api.github.com/users/" + username + "/repos");
}

function getUserInfo(username) {
  return axios.get("https://api.github.com/users/" + username);
}

// This is how promises work... if I invoked the getRepos function
// That will return the promiseObj which has a .then property on it.
// The function that we pass into the .then will get invoked when the
// promise is resolved.

// We call getRepos which returns a promise. When we fetch the data...
// it invoke the callback function and console.logs(data).

// Promises help us to avoid callbacks.

// Since we need both functions invoked at the same time..
// We lump them together inside of an object and use the axios.all function
var helpers = {
  getGithubInfo: function(username) {
    // Axios will wait for both of these promises to get done...
    // It will then return them both as an array.
    // We will then take the object that utilizes the array to hold the bio and repos.
    return axios.all([getRepos(username), getUserInfo(username)]).then(function(arr) {
      return {

        // We then want to display the repos + bios
        repos: arr[0].data,
        bio: arr[1].data
      };
    });
  }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
