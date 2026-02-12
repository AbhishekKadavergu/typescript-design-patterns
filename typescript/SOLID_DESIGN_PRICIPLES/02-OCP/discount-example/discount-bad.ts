// class Discount {
//   calculate(
//     price: number,
//     customerType: "premium" | "regular" | "other",
//   ): number {
//     if (customerType === "premium") {
//       return price * 0.8; // Apply 20% discount for premium customers
//     } else if (customerType === "regular") {
//       return price * 0.9; // Apply 10% discount for regular customers
//     } else {
//       return price * 0.9; // Apply 10% discount for other customers
//     }
//   }
// }

// // Example usage:
// const discount = new Discount();
// const originalPrice = 100;
// const customerType = "premium";
// const discountedPrice = discount.calculate(originalPrice, customerType);
// console.log(`Original Price: $${originalPrice}`);
// console.log(
//   `Discounted Price for ${customerType} customer: $${discountedPrice}`,
// );
