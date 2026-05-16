import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  imports: [RouterOutlet],
})
export class ShopComponent {
  private readonly route = inject(ActivatedRoute);

  readonly products = signal<Product[]>(this.route.snapshot.data['products']);
}
