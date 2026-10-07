import { computed, Service, signal } from '@angular/core';

@Service()
export class LoaderService {
  private readonly _loading = signal(false);
  readonly loading = computed(() => this._loading());

  show() {
    this._loading.set(true);
  }

  hide() {
    this._loading.set(false);
  }
}
