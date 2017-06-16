const chai = require('chai');
const expect = chai.expect;

// unit testing framework
// it refers to a piece of code... many possible pieces of code
// this is an example of a working test that cannot fail
describe('My unit testing setup',function(){
    it('should work',function(){
        expect(true).to.be.ok;
    });
});