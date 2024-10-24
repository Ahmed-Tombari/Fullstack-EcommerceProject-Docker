export class ProductCategory {
  id: number;
  categoryName: string;

  constructor(productCategory: ProductCategory) {
    this.id = productCategory.id;
    this.categoryName = productCategory.categoryName;
  }
}

