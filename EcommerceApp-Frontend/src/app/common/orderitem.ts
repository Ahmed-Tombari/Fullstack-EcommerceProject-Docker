// orderitem.ts
import { CartItem } from "./cart-item";

export class Orderitem {
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  productId: string;

  constructor(orderitem: Partial<Orderitem>) {
    this.imageUrl = orderitem.imageUrl || ''; // Provide a default value
    this.quantity = orderitem.quantity || 0; // Provide a default value
    this.unitPrice = orderitem.unitPrice || 0; // Provide a default value
    this.productId = orderitem.productId || ''; // Provide a default value
  }
}
