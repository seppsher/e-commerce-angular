import { Service, inject, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Service()
export class ErrorService {
  private readonly snackBar = inject(MatSnackBar);

  private readonly _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  show(message: string) {
    this._error.set(message);

    this.snackBar.open(message, 'OK', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['error-snackbar'],
    });
  }

  clear() {
    this._error.set(null);
  }
}
