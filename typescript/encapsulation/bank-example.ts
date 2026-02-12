class MyBankAccount {
  constructor(private _balance: number) {}

  public deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this._balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this._balance}`);
    } else {
      console.log(
        "Withdrawal amount must be positive and less than or equal to the current balance.",
      );
    }
  }

  public get balance(): number {
    return this._balance;
  }
}

const myAccount = new MyBankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(`Current balance: $${myAccount.balance}`);
