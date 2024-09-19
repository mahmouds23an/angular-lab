import { Component, Input } from '@angular/core';
import { Product } from '../interface/product';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';
import { ProductsService } from '../requests/products.service';
import { CartService } from '../requests/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() id!: string;
  constructor(
    private productService: ProductsService,
    private cart: CartService
  ) {}
  productsDetail!: Product;
  cartItems: number[] = [];
  rating!: number;
  amount: number = 1;
  faStar = faStar;
  stars = [1, 2, 3, 4, 5];
  ngOnInit() {
    this.productService.getProductDetail(this.id).subscribe((data) => {
      this.productsDetail = data;
      this.rating = Math.round(this.productsDetail.rating);
      this.cart.getCart().subscribe((data) => (this.cartItems = data));
    });
  }
  increAmount() {
    this.amount += 1;
  }
  decreAmount() {
    this.amount -= 1;
  }
  addToCart(id: number) {
    if (this.amount > 0) {
      for (let i = 0; i < this.amount; i++) {
        this.cartItems.push(id);
      }
    }
    this.cart.updateCart(this.cartItems);
  }
}
