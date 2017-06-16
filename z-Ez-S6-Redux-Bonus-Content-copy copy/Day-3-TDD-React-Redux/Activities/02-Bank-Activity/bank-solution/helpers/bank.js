const bank = {
    savings:10,
    checking:10,
    showAccounts:()=>{
        console.log(
            `Savings: ${bank.savings} , Checking: ${bank.checking}`);
    },
    withdraw:sum=>{
        if(sum<=bank.checking){
            bank.checking -=sum;
            console.log(`${sum} withdrawn.`);
            bank.showAccounts();
        }else{
            throw new Error("Insufficient funds!");
        }
    },
    deposit:(sum, account)=>{
        if(account === "checking"){
            bank.checking+=sum;
            console.log(`${sum} deposited.`);
        }else if(account === "savings"){
            bank.savings += sum;
            console.log(`${sum} deposited.`);
        } else{
            throw new Error("That account does not exist!");
        }
        bank.showAccounts();
    },
    transferFunds:(sum, accountFrom,accountTo)=>{
        bank[accountFrom]-=sum;
        bank[accountTo]+=sum;
        console.log(`${sum} transfered.`);
        bank.showAccounts();
    }
};

module.exports = bank;