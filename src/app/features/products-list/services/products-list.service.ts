import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@models/product.model';
import { map, Observable } from 'rxjs';

@Service({ autoProvided: false })
export class ProductListService {
  private readonly http = inject(HttpClient);

  getProducts(gender?: string): Observable<Product[]> {
    return this.http
      .get<Product[]>('assets/mock/products-list.json')
      .pipe(
        map(products =>
          gender ? products.filter(product => product.gender === gender) : products,
        ),
      );
  }
}
