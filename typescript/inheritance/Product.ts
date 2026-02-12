class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
  ) {}

  displayInfo(): void {
    console.log(`Product ID: ${this.id}`);
    console.log(`Price: $${this.price}`);
    console.log(`Description: ${this.description}`);
  }

  private calculateDiscountedPrice(discount: number): number {
    return this.price - this.price * (discount / 100);
  }
}

class Book extends Product {
  constructor(
    id: string,
    price: number,
    description: string,
    public author: string,
    public title: string,
  ) {
    super(id, price, description);
  }
  displayInfo(): void {
    super.displayInfo();
    console.log(`Author: ${this.author}`);
    console.log(`Title: ${this.title}`);
  }
}

class Electronics extends Product {
  constructor(
    id: string,
    price: number,
    description: string,
    public brand: string,
    public model: string,
  ) {
    super(id, price, description);
  }

  displayInfo(): void {
    super.displayInfo();
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
  }
}

const myBook = new Book(
  "book-jk-rowling-harry-potter-and-the-sorcerers-stone",
  19.99,
  'A book titled "Harry Potter and the Sorcerer\'s Stone" by J.K. Rowling',
  "J.K. Rowling",
  "Harry Potter and the Sorcerer's Stone",
);
myBook.displayInfo();

const myGadget = new Electronics(
  "electronics-apple-iphone-13",
  999.99,
  "An Apple iPhone 13",
  "Apple",
  "iPhone 13",
);
myGadget.displayInfo();
