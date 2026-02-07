"use strict"
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance)
            this.balance -= amount;
        else {
            throw new Error("Insufficient balance");
        }
    }
    getBalance() {
        return this.balance;
    }
}

class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    addInterest() {
        this.balance += (this.balance * this.interestRate);
    }
}

class CurrentAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= this.balance + this.overdraftLimit)
            this.balance -= amount;
        else {
            throw new Error("Withdrawal limit exceeded");
        }
    }
}


let savings = new SavingsAccount(101, 5000, 0.05);
savings.deposit(1000);
console.log(savings.getBalance());
savings.addInterest();
console.log(savings.getBalance());

let current = new CurrentAccount(102, 2000, 1000);
try {
    current.withdraw(2500);
} catch (error) {
    console.log(error.message);
}

console.log(current.getBalance());
try {
    current.withdraw(600);
} catch (error) {
    console.log(error.message);
}