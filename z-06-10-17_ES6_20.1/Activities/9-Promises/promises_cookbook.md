# Introduction

There's lots of documentation about promises out there but promises can still be confusing, so here's a quick cookbook with some examples.

Here are some links to more thorough documentation on Promises:

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
* https://spring.io/understanding/javascript-promises

## Terminology

The terminology is a little unfortunate. You might think that "resolved" means the `resolve` function of the Promise was called; it does not. A resolved promise is one in which either the `resolve` or `reject` function has been called as well as those in the chained promises. When the `resolve` function is called, the Promise is called "fulfilled".

```
  *pending* -> Promise still running
  *fulfilled* -> Promise completed successfully (`resolve` called)
  *rejected* -> Promise completed with error (`reject` called)
  *settled* -> Promise is either fulfilled or rejected
```

A more detailed explanation: https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md.

## Quick Primer

When you create a new Promise, you pass it an executor which executes immediately. When the executor is done with its work (which may happen a long time later asynchronously), it will call either the `resolve` or `reject` callback that was passed to it. If the executor throws an error, the `reject` callback will automatically be called.

You can get the result of a Promise by calling the `then` function. The `then` function takes two arguments which are `onFulfilled` which is called when the Promise's `resolve` function is called and `onRejected` when the Promise's `reject` function is called. Both `onFulfilled` and `onRejected` can be null/undefined indicating that `then` does not handle those results in which case the next Promise in the chain will handle those results (where the `onFulfilled` or `onRejected` is not null/undefined).

The `catch` function is simply a shortcut for saying `then(null, onRejected)`.

```
  function returnAPromise() {
    return new Promise((resolve, reject) => {
      resolve("I've done my job!");
    });
  }
  
  returnAPromise()
    .then(
      (fulfilledResult) => {
        // Called on success
      },
      (errorResult) => {
        // Called on error
      });
```

## Examples

*Basic Promise*

```
  returnAPromise()
    .then((result) => {
      // Called on success
    })
    .catch((error) => {
      // Called on error
    });
```

*"try...finally"*

```
  returnAPromise()
    .then((result) => {
      // Called on success
    })
    .catch((error) => {
      // Called on error
    })
    .then((result) => {
      // Always called (unless the catch throws an error) like a "finally"
    });
```

*Example of skipping to the catch*

When an error occurs, the first chained promise with an `onRejected` handler gets called.

```
  returnAPromise()
    .then((result) => {
      return 0;
    })
    .then((result) => {
      // result === 0
      return 2;
    })
    .then((result) => {
      // result === 2
      throw new Error('An Error!');
    })
    .then((result) => {
      // Not called
    })
    .then((result) => {
      // Not called
    })
    .catch((error) => {
      // error === 'An Error!'
    })
    .then((result) => {
      // Always called (unless the catch throws an error) like a "finally"
    });
```

*Example of skipping to the then*

The behavior is the same in that a Promise will skip to the next `onFulfilled` and the result from the previous `onFulfilled` is provided.

```
  returnAPromise()
    .then(() => {
      return 'Hello';
    })
    .catch((error) => {
      // This is skipped
      return 'From the catch';
    })
    .then((result) => {
      // result === 'Hello'
    });
```

*Returning value or promise*

When a then function returns, it can either return a value or a promise. The results look the same even though the nested promise could be asynchronous.

```
  function promiseIfOne(value) {
    if (value === 1) {
      return new Promise((resolve, reject) => {
        // Could be asynchronous
        resolve('One');
      });
    } else {
      return 'Not One';
    }
  }

  returnAPromise()
    .then(() => {
      return promiseIfOne(1);
    })
    .then((result) => {
      // result === 'One'
      return promiseIfOne(2);
    })
    .then((result) => {
      // result === 'Not One'
    })
```

*Executing Promises in parallel*

Use `Promise.all` to execute an array of promises in parallel. The `Promise.all` function will return a Promise that is settled when all of the Promises are fulfilled or when any one of them is rejected. The results of each Promise is made available as an array in the `then` callbacks.

```
  Promise.all(
    [
      Promise.resolve(1),
      Promise.resolve(10),
      Promise.resolve(50),
    ])
    .then((results) => {
      // result[0] === 1
      // result[1] === 10
      // result[2] === 50
    });
```

If a Promise is rejected, the first rejection error is passed to the `onRejected` function:

```
  Promise.all(
    [
      Promise.resolve(1),
      Promise.reject(10),
      Promise.resolve(50),
    ])
    .catch((error) => {
      // error === 10
    });
```

## Mistakes and antipatterns

### Don't pass a promise to `then` or `catch`

Don't confuse the following two examples.

```
  returnAPromise(1)
    .then(returnAPromise(2));
```

```
  returnAPromise(1)
    .then(() => {
      returnAPromise(2);
    });
```

The first example creates two Promises immediately and their executor functions both start executing immediately. The second example will only create the second Promise when the first Promise is fulfilled. Also, in the first case, if the second Promise itself chains to additional Promises, the outermost promise may settle before those additional Promises do because when you pass a Promise to the `then` function, it doesn't chain that Promise.

Make sure to pass a function to `then` or `catch` and not a Promise.

Note, that you can pass a named function to `then` which will be called when the `then` executes (note that the second returnAPromise is a function reference, not a function call):

```
  returnAPromise(1)
    .then(returnAPromise);
```

### Don't forget to return a new Promise

If you create a new Promise, don't forget to actually return it. This is bad:

```
function returnAPromise() {
  new Promise((resolve, reject) => {
    ...
  });
}
```