import { Component, inject } from '@angular/core';
import { CartStore } from '@store/cart.store';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { CartService } from './services/cart.service';
import { Router, RouterOutlet } from '@angular/router';
import { APP_ROUTES } from '@constants/routes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [MatIconModule, MatButtonModule, TranslatePipe, RouterOutlet],
  providers: [CartService],
})
export class CartComponent {
  private cart = inject(CartStore);
  private cartService = inject(CartService);
  private router = inject(Router);

  items = this.cart.items;
  totalPrice = this.cart.totalPrice;

  increase(itemId: number) {
    this.cart.increaseQuantity(itemId);
  }

  decrease(itemId: number) {
    this.cart.decreaseQuantity(itemId);
  }

  remove(itemId: number) {
    this.cart.removeItem(itemId);
  }

  createOrder() {
    this.cartService.createOrder(this.cart.items()).subscribe(order => {
      this.router.navigate([APP_ROUTES.SHOP, APP_ROUTES.CART, order.orderId]);
    });
  }
}
