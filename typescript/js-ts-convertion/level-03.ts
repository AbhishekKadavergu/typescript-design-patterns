// // JS Snippet 3
// class BankAccount {
//   constructor(initialBalance) {
//     this.balance = initialBalance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }
// }

// const myAccount = new BankAccount(100);
// myAccount.balance = 500000; // 😱 Oh no! Anyone can hack the balance in JS.

// JS -> TS
class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
  getBalance(): number {
    return this.balance;
  }
}

const myAccount = new BankAccount(100);
myAccount.deposit(500000); // 😱 Oh no! Anyone can hack the balance in JS.
console.log(myAccount.getBalance());
