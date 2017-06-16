const bank = require('./helpers/bank');
let {showAccounts,withdraw,deposit,transferFunds} = bank;

showAccounts();
withdraw(5);
showAccounts();
deposit(5,"checking");
transferFunds(5,"savings","checking");
