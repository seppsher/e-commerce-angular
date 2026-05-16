import { effect } from '@angular/core';
import {
  signalStore,
  withState,
  withComputed,
  withMethods,
  patchState,
  withHooks,
} from '@ngrx/signals';
import { CartItem, CartState } from '@models/cart.model';
import { Product } from '@models/product.model';

const initialState: CartState = {
  items: [],
  lastAddedItem: null,
  lastRemovedItem: null,
};

export const CartStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed(store => ({
    totalItems: () => store.items().reduce((sum, i) => sum + i.quantity, 0),

    totalPrice: () => store.items().reduce((sum, i) => sum + i.quantity * i.price, 0),

    isEmpty: () => store.items().length === 0,
  })),

  withHooks({
    onInit(store) {
      effect(() => {
        const items = store.items();
        localStorage.setItem('cart', JSON.stringify(items));
      });
    },
  }),

  withMethods(store => ({
    addItem(product: CartItem) {
      const items = store.items();
      const existing = items.find(i => i.id === product.id);

      const updatedItems = existing
        ? items.map(i => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...items, { ...product, quantity: 1 }];

      patchState(store, {
        items: updatedItems,
        lastAddedItem: product,
      });
    },

    addToCart(product: Product) {
      const cartItem: CartItem = {
        id: product.id,
        name: product.productName,
        price: product.price,
        quantity: 1,
        image: product.photo,
      };

      this.addItem(cartItem);
    },

    removeItem(id: number) {
      const removed = store.items().find(i => i.id === id);

      const updatedItems = store.items().filter(i => i.id !== id);

      patchState(store, {
        items: updatedItems,
        lastRemovedItem: removed ?? null,
      });
    },

    increaseQuantity(id: number) {
      const updatedItems = store
        .items()
        .map(i => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i));

      patchState(store, { items: updatedItems });
    },

    decreaseQuantity(id: number) {
      const items = store.items();
      const item = items.find(i => i.id === id);

      if (!item) return;

      if (item.quantity === 1) {
        const updatedItems = items.filter(i => i.id !== id);

        patchState(store, {
          items: updatedItems,
          lastRemovedItem: item,
        });

        return;
      }

      const updatedItems = items.map(i => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i));

      patchState(store, { items: updatedItems });
    },

    clear() {
      patchState(store, { items: [] });
    },

    loadFromStorage() {
      const data = localStorage.getItem('cart');

      if (data) {
        const parsed = JSON.parse(data) as CartItem[];
        patchState(store, { items: parsed });
      }
    },
  })),
);
