import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@models/product.model';
import { Observable } from 'rxjs';

@Service({ autoProvided: false })
export class ProductService {
  private readonly http = inject(HttpClient);

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`assets/mock/products/${id}.json`);
  }
}
