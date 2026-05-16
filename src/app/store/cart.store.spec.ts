import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { CartStore } from './cart.store';
import { Product } from '../models/product.model';
import { CartItem } from '@models/cart.model';

describe('CartStore', () => {
  let store: InstanceType<typeof CartStore>;

  const item: CartItem = {
    id: 1,
    name: 'Test',
    price: 10,
    quantity: 1,
    image: 'img.png',
  };

  const product: Product = {
    id: 2,
    productName: 'Phone',
    category: 'odziez',
    subcategory: 'koszulki',
    gender: 'men',
    brand: 'TestBrand',
    photo: 'p.png',
    price: 100,
    description: 'desc',
    maintenanceInfo: 'info',
  };

  beforeEach(() => {
    let storeData: Record<string, string> = {};

    vi.stubGlobal('localStorage', {
      getItem: vi.fn((key: string) => storeData[key] ?? null),
      setItem: vi.fn((key: string, value: string) => {
        storeData[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete storeData[key];
      }),
      clear: vi.fn(() => {
        storeData = {};
      }),
    });

    TestBed.configureTestingModule({
      providers: [CartStore],
    });

    store = TestBed.inject(CartStore);

    store.clear();
  });

  it('should initialize with empty state', () => {
    expect(store.items()).toEqual([]);
    expect(store.isEmpty()).toBe(true);
    expect(store.totalItems()).toBe(0);
    expect(store.totalPrice()).toBe(0);
  });

  it('should add an item', () => {
    store.addItem(item);

    expect(store.items().length).toBe(1);
    expect(store.items()[0]).toEqual(item);
    expect(store.lastAddedItem()).toEqual(item);
  });

  it('should increase quantity when adding the same item again', () => {
    store.addItem(item);
    store.addItem(item);

    expect(store.items()[0].quantity).toBe(2);
  });

  it('should add product via addToCart()', () => {
    store.addToCart(product);

    const added = store.items()[0];
    expect(added.id).toBe(product.id);
    expect(added.name).toBe(product.productName);
    expect(added.price).toBe(product.price);
    expect(added.image).toBe(product.photo);
    expect(added.quantity).toBe(1);
  });

  it('should remove an item', () => {
    store.addItem(item);
    store.removeItem(item.id);

    expect(store.items().length).toBe(0);
    expect(store.lastRemovedItem()).toEqual(item);
  });

  it('should increase quantity', () => {
    store.addItem(item);
    store.increaseQuantity(item.id);

    expect(store.items()[0].quantity).toBe(2);
  });

  it('should decrease quantity', () => {
    store.addItem(item);
    store.increaseQuantity(item.id);
    expect(store.items()[0].quantity).toBe(2);
    store.decreaseQuantity(item.id);
    expect(store.items()[0].quantity).toBe(1);
  });

  it('should remove item when decreasing quantity from 1 to 0', () => {
    store.addItem(item);
    store.decreaseQuantity(item.id);

    expect(store.items().length).toBe(0);
    expect(store.lastRemovedItem()).toEqual(item);
  });

  it('should clear items', () => {
    store.addItem(item);
    store.clear();

    expect(store.items()).toEqual([]);
  });

  it('should load items from localStorage', () => {
    const mockData = JSON.stringify([item]);

    localStorage.setItem('cart', mockData);

    store.loadFromStorage();

    expect(store.items().length).toBe(1);
    expect(store.items()[0]).toEqual(item);
  });

  it('should compute totalItems and totalPrice correctly', () => {
    store.addItem(item);
    store.addItem(item);

    expect(store.totalItems()).toBe(2);
    expect(store.totalPrice()).toBe(20);
  });
});
