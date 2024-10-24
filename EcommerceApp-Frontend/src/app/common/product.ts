export class Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: string;
  unitsInStock: string;
  dateCreated: string;
  lastUpdated: string;

  constructor(product?: Partial<Product>) { // Use Partial to make properties optional
    this.id = product?.id || ''; // Provide default values
    this.sku = product?.sku || '';
    this.name = product?.name || '';
    this.description = product?.description || '';
    this.unitPrice = product?.unitPrice || 0;
    this.imageUrl = product?.imageUrl || '';
    this.active = product?.active || '';
    this.unitsInStock = product?.unitsInStock || '';
    this.dateCreated = product?.dateCreated || '';
    this.lastUpdated = product?.lastUpdated || '';
  }
}
