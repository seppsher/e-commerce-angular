import { Component, inject } from '@angular/core';
import { LoaderService } from '@services/loader/loader.service';

@Component({
  selector: 'app-loader',
  template: `
    @if (loader.loading()) {
      <div class="loader-overlay">
        <div class="spinner"></div>
      </div>
    }
  `,
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  readonly loader: LoaderService = inject(LoaderService);
}
