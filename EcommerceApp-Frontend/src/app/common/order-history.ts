export class OrderHistory {

  id: string;
  orderTrackingNumber: string;
  totalPrice: number;
  totalQuantity: number;
  dateCreated: Date;

  constructor(orderHistory: OrderHistory) {
    this.id = orderHistory.id;
    this.orderTrackingNumber = orderHistory.orderTrackingNumber;
    this.totalPrice = orderHistory.totalPrice;
    this.totalQuantity = orderHistory.totalQuantity;
    this.dateCreated = orderHistory.dateCreated;
  }
}
