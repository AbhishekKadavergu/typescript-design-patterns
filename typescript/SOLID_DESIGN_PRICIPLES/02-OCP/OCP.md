# Open-Closed Principle (OCP)

## Definition

Software entities should be:

- Open for Extension
- Closed for Modification

Meaning:
You should be able to add new behavior without modifying existing working code.

---

# Why OCP?

❌ Avoid modifying stable code  
❌ Avoid long if/else or switch statements  
✅ Reduce risk of breaking existing functionality  
✅ Improve scalability

---

# How to Achieve OCP?

1. Use interfaces / abstractions
2. Depend on abstraction, not concrete classes
3. Add new behavior via new classes

---

# Example 1: Discount Calculation

## ❌ Bad Design (Violates OCP)

```ts
// Violation: modifying class to handle new discount types
class Discount {
  calculate(type: string, price: number) {
    if (type === "premium") return price * 0.8;
    if (type === "regular") return price * 0.9;
    if (type === "seasonal") return price * 0.85; // new case added by modifying class
    return price;
  }
}
```

# Example 2: Processing Payments

## ❌ Bad Design (Violates OCP)

```ts
// Violation: adding new payment flows by mutating existing processor
class PaymentProcessor {
  process(paymentType: string, amount: number) {
    if (paymentType === "card") {
      // card logic
    } else if (paymentType === "paypal") {
      // paypal logic
    } else if (paymentType === "crypto") {
      // crypto logic added later — modifies existing class
    }
  }
}
```
