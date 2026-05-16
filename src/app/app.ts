import { Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { CartStore } from '@store/cart.store';
import { LoaderComponent } from '@components/loader/loader.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, NavigationComponent, MatSnackBarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private cart = inject(CartStore);
  private snack = inject(MatSnackBar);
  private translate = inject(TranslateService);

  protected readonly title = signal('e-commerce-angular');

  constructor() {
    this.translate.addLangs(['pl', 'en']);
    this.translate.setFallbackLang('en');

    const savedLang = localStorage.getItem('lang') ?? 'en';
    this.translate.use(savedLang);

    this.cart.loadFromStorage();

    effect(() => {
      const item = this.cart.lastAddedItem();
      if (item) {
        this.snack.open(
          this.translate.instant('global.notifications.itemAdded', { name: item.name }),
          'OK',
          {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          },
        );
      }
    });

    effect(() => {
      const removed = this.cart.lastRemovedItem();
      if (removed) {
        this.snack.open(
          this.translate.instant('global.notifications.itemRemoved', { name: removed.name }),
          'OK',
          {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          },
        );
      }
    });
  }
}
