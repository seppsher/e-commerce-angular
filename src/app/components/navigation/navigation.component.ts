import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { APP_ROUTES } from '@constants/routes';
import { CartStore } from '@store/cart.store';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { LangSwitcherComponent } from '@components/lang-switcher/lang-switcher.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    LangSwitcherComponent,
    TranslatePipe,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  private cart = inject(CartStore);

  readonly APP_ROUTES = APP_ROUTES;

  totalItems = this.cart.totalItems;
  items = this.cart.items;
  totalPrice = this.cart.totalPrice;
}
