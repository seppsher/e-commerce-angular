import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@models/product.model';
import { TranslatePipe } from '@ngx-translate/core';
import { CartStore } from '@store/cart.store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [MatButtonModule, TranslatePipe],
})
export class ProductComponent {
  private readonly route = inject(ActivatedRoute);
  private cart = inject(CartStore);
  readonly product = signal<Product>(this.route.snapshot.data['product']);

  addToCart(product: Product) {
    this.cart.addToCart(product);
  }
}
