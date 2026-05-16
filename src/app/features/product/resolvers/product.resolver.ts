import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Product } from '@models/product.model';
import { ProductService } from '../services/product.service';
import { catchError, of } from 'rxjs';

export const productResolver: ResolveFn<Product | null> = route => {
  const service = inject(ProductService);
  const id = Number(route.paramMap.get('id'));

  return service.getProduct(id).pipe(catchError(() => of(null)));
};
