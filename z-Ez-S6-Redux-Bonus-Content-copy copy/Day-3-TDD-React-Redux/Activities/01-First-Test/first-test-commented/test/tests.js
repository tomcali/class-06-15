// Here we are requiring chai, which is our assertion library. This is the piece that determines whether or not a value is equal to the expected result.
const chai = require('chai');
// Chai supports several styles of assertion. I find the expect API reads more semantically. But feel free to try others! chai.assert is a thing!
const expect = chai.expect;

// Describe here is a mocha function (remember, we're calling this file with mocha) a describe block is used to describe and run a group of related tests. A describe block should have multiple 'it' blocks inside of it.
describe('My unit testing setup',function(){
    //The it block here describes and tests for a specific expected result.
    it('should work',function(){
        //Inside of this function is where we test our values to see if our function worked the way we wanted it to.
        expect(true).to.be.ok;
    });

    //You should (in this case) also write a fail case to make sure that your program will catch errors correctly. This example will throw an error because 1 evaluates to true, but we are expecting it to return falsey value.
    it('puts the lotion in the basket',function(){
        expect(1).to.not.be.ok;
    });
});