export type Gender = 'men' | 'women' | 'kids';

export type Category = 'odziez' | 'obuwie' | 'akcesoria';

export type Subcategory = 'koszulki' | 'spodnie' | 'bluzy' | 'kurtki' | 'inne';

export interface Product {
  readonly id: number;
  readonly productName: string;
  readonly category: Category;
  readonly subcategory: Subcategory;
  readonly gender: Gender;
  readonly brand: string;
  readonly photo: string;
  readonly price: number;
  readonly description?: string;
  readonly maintenanceInfo?: string;
}
