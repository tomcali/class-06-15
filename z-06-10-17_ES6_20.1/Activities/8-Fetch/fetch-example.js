//Up until now, we've often use jQuery or another third party library to handle our HTTP requests for us. JavaScript can do this natively using `XMLHttpRequest`. However, doing so is needlessly complex. ES6 now provides a simpler (albiet semi-experimental) way of transfering data between a client and a server via the `fetch` command.

//The `fetch` command returns a Promise. And for API usage, you may need to specify `respsonse.json()` inside of your `.then(function(response){})` function to convert the response into JSON so you can manipulate it.

//ES5
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://jsonplaceholder.typicode.com/users");
oReq.send();

//ES6
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) { return response.json(); })
    .then(function(json) {
    console.log(json);
});

//Fetch can be used to request non HTTP resources as well. If can be used to asyncronously load other files. Additional Fetch examples can be found here! (  https://github.com/mdn/fetch-examples  )

//One major downside with the `fetch()` API = in the case of an error, your .catch() phase from the yielded Promise will not be triggered. Even if the server responds with a 404 status code. The catch method chained onto a fetch will only be triggered if the request is not made. RESOURCE SERVER ERRORS DO NOT CONSTITUTE NETWORK ERRORS. THE ERROR ONLY TRIGGERS IF THE REQUEST FAILS! You'll have to create your own error handling for it.