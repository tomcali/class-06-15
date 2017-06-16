//While this new functionality is technically part of the ES7 spec, Node.js supports `Async/Await` natively without the `--harmony` flag as of version 7.6. As of February 2017, `Async/Await` now a viable and well supported option for handling asynchronous code.

//Additional example of async await is available here =  http://masnun.com/2015/11/11/using-es7-asyncawait-today-with-babel.html

//And another good resource on the Promises to Async/Await comparision = https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8

//Interesting note of differentiation between `Async/Await` and `yield` in Generators, the `async` and `await` keywords in JS can be considered as use cases of the `yield` function. Under the hood, it performs very similarly to Generators. Async and await are used together, whereas yield is almost exclusively for generators. Yield returns a final value outside of a generator, await on the other hand, will call Promise.resolve() upon the awaited value. Await returns a promise, yield simply returns value.

var request = require('request');

function getJSON(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      resolve(body);
    });
  });
}

async function main() {
  var data = await getJSON();
  console.log(data); // NOT undefined!
}

main();
//This above example shows structure, but code does not run because we haven't npm installed request, and have not defined our 'resolve' or 'reject' functions. 

//It’s important to remember: async functions don’t magically wait for themselves. You must await, or you’ll get the promise instead of the value you expect to be returned from the promise.