class _PaymentProcessor {
  processPayment(payment: string, amount: number) {
    if (payment === "debit") {
      console.log(`Processing payment of  ${amount} through Debit card`);
    } else if (payment === "credit") {
      console.log(`Processing payment of  ${amount} through Credit card`);
    } else if (payment === "paypal") {
      console.log(`Processing payment of  ${amount} through Paypal`);
    }
  }
}

//usage
const _paymentProcessor = new _PaymentProcessor();
_paymentProcessor.processPayment("debit", 100);
