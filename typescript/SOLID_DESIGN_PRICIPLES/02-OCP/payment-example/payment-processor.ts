interface PaymentMethod {
  pay(amount: number): void;
}

class DebitCardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Debit Card`);
  }
}

class CreditCardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Debit Card`);
  }
}

class PaypalPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Debit Card`);
  }
}

//If a new payment method comes, still we are not modifying the main class
//We just create a new class for the new paymen method.

class UpiPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using UPI`);
  }
}

//Main Class

class PaymentProcessor {
  processPayment(paymentMethod: PaymentMethod, amount: number) {
    paymentMethod.pay(amount);
  }
}

//usage

const paymentProcessor = new PaymentProcessor();

paymentProcessor.processPayment(new DebitCardPayment(), 100);
paymentProcessor.processPayment(new CreditCardPayment(), 400);
paymentProcessor.processPayment(new UpiPayment(), 500);
