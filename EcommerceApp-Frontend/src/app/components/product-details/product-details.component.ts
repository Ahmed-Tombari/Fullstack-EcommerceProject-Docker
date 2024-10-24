import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService:ProductService, private route:ActivatedRoute, private cartService: CartService)  { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {
    // Get the "id" param string
    const idParam = this.route.snapshot.paramMap.get('id');

    // Check if idParam is not null
    if (idParam !== null) {
      const theProductId: number = +idParam; // Convert string to number

      // Get the product for the given ID
      this.productService.getProduct(theProductId).subscribe(
        data => {
          this.product = data;
        },
        error => {
          console.error('Error fetching product details', error);
          // Handle error (e.g., redirect or show an error message)
        }
      );
    } else {
      console.error('Product ID not found in the route parameters.');
      // Handle the case where the ID is not found (e.g., redirect)
    }
  }

  addToCart() {
    console.log(`Adding to cart: ${this.product.name}, ${this.product.unitPrice}`);
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }
}