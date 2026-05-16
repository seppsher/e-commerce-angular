import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Product } from '@models/product.model';
import { ProductListService } from '../services/products-list.service';

export const productListResolver: ResolveFn<Product[]> = () => {
  const service = inject(ProductListService);
  return service.getProducts();
};
