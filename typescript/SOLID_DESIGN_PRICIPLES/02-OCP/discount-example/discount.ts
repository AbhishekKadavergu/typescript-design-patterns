interface DiscountStrategy {
  calculateDiscount(price: number): number;
}

class PremiumCustomerDiscount implements DiscountStrategy {
  calculateDiscount(price: number): number {
    return price * 0.2; // Apply 20% discount for premium customers
  }
}

class RegularCustomerDiscount implements DiscountStrategy {
  calculateDiscount(price: number): number {
    return price * 0.1; // Apply 10% discount for regular customers
  }
}

class GoldCustomerDiscount implements DiscountStrategy {
  calculateDiscount(price: number): number {
    return price * 0.3;
  }
}

class Discount {
  calculateDiscount(strategy: DiscountStrategy, price: number): number {
    let finalDiscount = strategy.calculateDiscount(price);

    if (finalDiscount > 500) finalDiscount = 500;

    return finalDiscount;
  }
}

let premiumCust: PremiumCustomerDiscount = new PremiumCustomerDiscount();
let discount: Discount = new Discount();
console.log(discount.calculateDiscount(premiumCust, 10000));

let regularCust: RegularCustomerDiscount = new RegularCustomerDiscount();
console.log(discount.calculateDiscount(regularCust, 100));

let goldCust: GoldCustomerDiscount = new GoldCustomerDiscount();
console.log(discount.calculateDiscount(goldCust, 100));
