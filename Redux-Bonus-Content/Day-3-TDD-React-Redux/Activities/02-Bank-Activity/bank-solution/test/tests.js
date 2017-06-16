//Step 1 = we'll need to require the file to test, as well as the assertion library for testing.
// set up unit tests with new values with each test
// reset the values before you run each function

const bank = require('../helpers/bank');
let {showAccounts,withdraw,deposit,transferFunds} = bank;
const expect = require('chai').expect;

describe('A user should be able to',()=>{

    // sets the values before running each function
    //Mocha gives us setup and teardown hooks, allowing us to standardize and isloate out tests better. The beforeEach is one of the most commonly used ones. This sets a baseline for all 'it' statements in this describe block, that way no tests will interfere with the return values of other tests. Otherwise simply changing the order of your test calls could break your code.
    beforeEach(()=>{
        bank.savings=10;
        bank.checking=10;
    });

    // put x before it to run as a pending test... something that has not been written yet
    // when you run this, it will show as a pending test
    xit('view current balance',()=>{
        //I'm opting to not write a test for this, as it's just a console.log statement. Native code is already heavily tested before release. I'm leaving this here as an example of how to mark a pending test. (hint: putting 'x' in front of the 'it' marks a test as pending. This allows you to draft your specs before writing the tests for them)
    });

    // an actual test... with expect... note the simple statement English-like for this assertion
    it('withdraw funds',()=>{
        withdraw(5);
        expect(bank.checking).to.equal(5);
    });

    // try-patch block... try to execute code in try block... if it fails, catch the error
    // users are very creative in causing errors
    it('see an error when attempting to overdraw',()=>{
        try{
            withdraw(100000000000);
        }catch(err){
            expect(err).to.be.an.instanceOf(Error);
            expect(err.toString()).to.eql("Error: Insufficient funds!");
        }
    });

    it('deposit funds to existing accounts',()=>{
        deposit(5,'savings');
        expect(bank.savings).to.equal(15);
    });

    it('see an error when they attempt to deposit to nonexistant account',()=>{
        try{
            deposit(5,'doesNotExist');
        }catch(err){
            expect(err).to.be.an.instanceOf(Error);
            expect(err.toString()).to.eql("Error: That account does not exist!");
        }
    });

    it('transfer funds between accounts',()=>{
        transferFunds(10,'checking','savings');
        expect(bank.checking).to.equal(0);
        expect(bank.savings).to.equal(20);
    });
})