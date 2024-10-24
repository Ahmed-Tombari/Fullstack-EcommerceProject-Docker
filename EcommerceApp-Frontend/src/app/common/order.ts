export class Order {
  totalQuantity: number;
  totalPrice: number;

  // Updated constructor to handle cases with or without the order argument
  constructor(order?: Partial<Order>) {
    // If the argument is passed, use its values, otherwise, default to 0
    this.totalQuantity = order?.totalQuantity ?? 0;
    this.totalPrice = order?.totalPrice ?? 0;
  }
}
