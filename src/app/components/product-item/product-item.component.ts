import { Component, inject, input } from '@angular/core';
import { Product } from '@models/product.model';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '@constants/routes';
import { CartStore } from '@store/cart.store';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
  imports: [RouterLink, MatCardModule, MatButtonModule, TranslatePipe],
})
export class ProductItemComponent {
  private cart = inject(CartStore);

  readonly APP_ROUTES = APP_ROUTES;

  product = input.required<Product>();

  addToCart(product: Product) {
    this.cart.addToCart(product);
  }
}
