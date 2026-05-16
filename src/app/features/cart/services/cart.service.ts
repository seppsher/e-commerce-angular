import { Service } from '@angular/core';
import { CartItem } from '@models/cart.model';
import { Observable, of } from 'rxjs';

@Service({ autoProvided: false })
export class CartService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public createOrder(products: CartItem[]): Observable<{ orderId: string }> {
    // http request to create order in backend would be here, but for now we will just simulate it
    const orderId = crypto.randomUUID();
    return of({ orderId });
  }
}
