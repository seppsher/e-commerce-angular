import { signal, computed, Service } from '@angular/core';

@Service()
export class LoaderService {
  private readonly _loading = signal<boolean>(false);

  readonly loading = computed<boolean>(() => this._loading());

  show() {
    this._loading.set(true);
  }

  hide() {
    this._loading.set(false);
  }
}
