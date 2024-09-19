import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../requests/cart.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() product: any;
  cartItems: number[] = [];
  rating!: number;
  amount: number = 0;

  constructor(private router: Router, private cart: CartService) {}

  ngOnInit() {
    this.rating = Math.round(this.product.rating);
    this.cart.getCart().subscribe((data) => (this.cartItems = data));
  }

  stars = [1, 2, 3, 4, 5];

  redirectToDetails(id: number) {
    this.router.navigate([`/product-detail/${id}`]);
  }

  addToCart(id: number) {
    this.cartItems.push(id);
    this.cart.updateCart(this.cartItems);
    this.amount += 1;
  }
}