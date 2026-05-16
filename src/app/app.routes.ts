import { Routes } from '@angular/router';
import { ContactComponent } from '@features/contact/contact.component';
import { productResolver } from '@features/product/resolvers/product.resolver';
import { ProductService } from '@features/product/services/product.service';
import { productListResolver } from '@features/products-list/resolvers/products-list.resolver';
import { ProductListService } from '@features/products-list/services/products-list.service';
import { ShopComponent } from '@features/shop/shop.component';
import { APP_ROUTES } from '@constants/routes';

export const routes: Routes = [
  {
    path: APP_ROUTES.SHOP,
    component: ShopComponent,
    children: [
      {
        path: APP_ROUTES.PRODUCT_LIST,
        loadComponent: () =>
          import('@features/products-list/products-list.component').then(
            m => m.ProductsListComponent,
          ),
        providers: [ProductListService],
        resolve: {
          productsList: productListResolver,
        },
      },
      {
        path: `${APP_ROUTES.PRODUCT}/:id`,
        loadComponent: () =>
          import('@features/product/product.component').then(m => m.ProductComponent),
        providers: [ProductService],
        resolve: {
          product: productResolver,
        },
      },
      {
        path: `${APP_ROUTES.CART}`,
        loadComponent: () => import('@features/cart/cart.component').then(m => m.CartComponent),
        children: [
          {
            path: `:id`,
            loadComponent: () =>
              import('@features/payment/payment.component').then(m => m.PaymentComponent),
          },
        ],
      },
      {
        path: '',
        redirectTo: APP_ROUTES.PRODUCT_LIST,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: APP_ROUTES.CONTACT,
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: `${APP_ROUTES.SHOP}/${APP_ROUTES.PRODUCT_LIST}`,
  },
];
