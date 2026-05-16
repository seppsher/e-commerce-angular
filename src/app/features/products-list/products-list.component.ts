import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@models/product.model';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ProductListService } from './services/products-list.service';
import { form, FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  imports: [
    ProductItemComponent,
    FormField,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    TranslatePipe,
  ],
  providers: [ProductListService],
})
export class ProductsListComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly productListService = inject(ProductListService);

  readonly products = signal<Product[]>(this.route.snapshot.data['productsList']);

  formModel = signal<{ gender: string }>({
    gender: '',
  });

  form = form(this.formModel);

  onSubmit() {
    this.productListService.getProducts(this.formModel().gender).subscribe(products => {
      this.products.set(products);
    });
  }
}
