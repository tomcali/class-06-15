//Prior to ES6, your best bet for modularization of files was to use the Node.js `module.exports` and `require` syntax . This pattern did not exist in JavaScript natively, and the `module.exports` was a Node.js method that was introduced to mimic the functionality of classes in other programming languages. `module.exports` did not exist in native Javascript.

//With ES6, we now have an alternative standardized import/export syntax using the `import` and `export` keywords. We can export functions, objects, a list of objects, and other values (etc.) simply by using the export keyword:

export let name = 'David';
export let age  = 25;​​
export const sumTwo = (a, b) => a+b;

//Using the new `export` syntax, you can also export default bindings. But if you use `export default`, it's best practice to do so at the end of the module. It makes it clear what is being exported, and saves time by having to figure out what name a value was exported as. More so, the common practice in CommonJS modules is to export a single value or object. By sticking to this paradigm, we make our code easily readable and allow ourselves to interpolate between CommonJS and ES6 modules.

function sumFour(a, b, c, d) {
    return a + b + c + d;
};

function sumThree(a, b, c) {
    return a + b + c;
};

let api = {
    sumFour,
    sumThree
};

export default api;

// Which is the same as :
// export { api as default };
//If you export something as default, you should not require the use of {} brackets when you import the file/module. As it has been set to default.

//The new `import` keyword is equally easy to use. You can import an entire file or module. (It is important to note that simply importing an entire file will execute all code at the top level of that file.)

import fizzbuzz from 'fizzbuzz';

//Or using object destructuring, you can import specific parts of a module. Additionally, you can also rename your imports in a similar way you'd assign an alias to a SELECT statement in SQL.

//Destructure
import {floor,round,max} from 'math';

//Alias
import * as util from 'math';

//Destructure + Alias
import {
    derpington as derp,
    derpette as derp2
} from 'phoneBook';

//Similar to SQL, you can denote `*` to IMPORT ALL THE THINGS (also called namespace import).

import * as util from 'extraHelperMethodsObject';
