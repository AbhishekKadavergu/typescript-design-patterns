class OrderServiceBad {
  constructor() {}

  createOrder(orderData: any) {
    let order = { ...orderData, status: "created" };

    //appy discounts
    order.price = order.price * 0.9; // Apply a 10% discount
    //Discount logic may change, and this method will need to be modified, violating the SRP principle.

    //save order to database
    Database.save(order);
    //We may need to change the database logic, and this method will need to be modified, violating the SRP principle.
    //We may also move from SQL to NoSQL, which would require changes to this method, violating the SRP principle.

    //Notify user
    Email.send(order.userId, "Your order has been created!");
    //We may need to change the notification logic, and this method will need to be modified, violating the SRP principle.
    //We may move from Email to SMS, which would require changes to this method, violating the SRP principle.

    console.log("Order created:", order);
  }
}
