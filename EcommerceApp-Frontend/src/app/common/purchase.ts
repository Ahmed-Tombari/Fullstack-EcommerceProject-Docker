import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";
import { Orderitem } from "./orderitem";

export class Purchase {
  customer: Customer;
  shippingAddress: Address;
  billingAddress: Address;
  order: Order;
  orderItems: Orderitem[];

  constructor(purchase?: Partial<Purchase>) {
    this.customer = purchase?.customer || new Customer();
    this.shippingAddress = purchase?.shippingAddress || new Address();
    this.billingAddress = purchase?.billingAddress || new Address();
    this.order = purchase?.order || new Order();
    this.orderItems = purchase?.orderItems || [];
  }
}
