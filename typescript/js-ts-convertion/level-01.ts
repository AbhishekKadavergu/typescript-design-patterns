// // JS Snippet 1
// function calculateTotal(price, tax) {
//   return price + tax;
// }

// const total = calculateTotal(100, 20);

// JS to TS
function calculateTotal(price: number, tax: number): number {
  return price + tax;
}

const total = calculateTotal(100, 20);
