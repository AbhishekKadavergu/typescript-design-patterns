class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private notifier: NotificationService,
    private discountService: DiscountService,
  ) {}

  createOrder(orderData: any) {
    let order = { ...orderData, status: "created" };

    //Discount Service
    this.discountService.applyDiscount(order);
    order.price = this.orderRepository.save(order.price);
    this.notifier.notify(order.userId, "Your order has been created!");
    console.log("Order created:", order);
  }
}
