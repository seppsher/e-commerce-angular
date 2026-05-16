import { Component, input } from '@angular/core';
import { FieldState } from '@angular/forms/signals';
import { MatError } from '@angular/material/form-field';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-field-errors',
  imports: [MatError, TranslatePipe],
  template: `
    @if (field().touched() && field().invalid()) {
      @if (field().getError('required')) {
        <mat-error>{{ 'global.validation.required' | translate }}</mat-error>
      }

      @if (field().getError('email')) {
        <mat-error>{{ 'global.validation.email' | translate }}</mat-error>
      }
      @if (field().getError('minLength')) {
        <mat-error>
          {{
            'global.validation.minLength'
              | translate: { length: field().getError('minLength')?.minLength }
          }}
        </mat-error>
      }

      @if (field().getError('maxLength')) {
        <mat-error>
          {{
            'global.validation.maxLength'
              | translate: { length: field().getError('maxLength')?.maxLength }
          }}
        </mat-error>
      }

      @if (field().getError('phone')) {
        <mat-error>{{ 'global.validation.phone' | translate }}</mat-error>
      }
    }
  `,
})
export class FieldErrorsComponent {
  field = input.required<FieldState<unknown>>();
}
