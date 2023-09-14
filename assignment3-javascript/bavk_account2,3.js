class BankAccount {
    constructor(balance = 0) {
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into the account.`);
      } else {
        console.log('Invalid deposit amount. Amount must be greater than 0.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from the account.`);
      } else if (amount <= 0) {
        console.log('Invalid withdrawal amount. Amount must be greater than 0.');
      } else {
        console.log('Insufficient funds for withdrawal.');
      }
    }
  
    checkBalance() {
      console.log(`Current balance: ${this.balance}`);
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(balance = 0, interestRate = 0.02) {
      super(balance);
      this.interestRate = interestRate;
    }
  
    calculateInterest() {
      const interest = this.balance * this.interestRate;
      this.balance += interest;
      console.log(`Interest earned: ${interest}`);
    }
  }
  
  // Create an instance of the SavingsAccount class
  const savingsAccount = new SavingsAccount(1000, 0.03); // Initial balance: 1000, Interest rate: 3%
  
  savingsAccount.checkBalance(); // Output: Current balance: 1000
  savingsAccount.deposit(500);
  savingsAccount.calculateInterest(); // Output: Interest earned: 45
  savingsAccount.checkBalance(); // Output: Current balance: 1545
  savingsAccount.withdraw(200);
  savingsAccount.checkBalance(); // Output: Current balance: 1345
  