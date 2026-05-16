import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatError } from '@angular/material/form-field';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-field-errors',
  // NOTE: Eager is intentional here.
  // This component relies on Reactive Forms, which are not signal‑based.
  // OnPush would not detect control state changes, so Eager ensures
  // validation messages update correctly.
  // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatError, TranslatePipe],
  template: `
    @if (field().touched && field().invalid) {
      @for (key of errorKeys(); track key) {
        <mat-error>
          @switch (key) {
            @case ('required') {
              {{ 'global.validation.required' | translate }}
            }
            @case ('email') {
              {{ 'global.validation.email' | translate }}
            }
            @case ('minlength') {
              {{
                'global.validation.minLength'
                  | translate: { length: field().getError('minlength')?.requiredLength }
              }}
            }
            @case ('maxlength') {
              {{
                'global.validation.maxLength'
                  | translate: { length: field().getError('maxlength')?.requiredLength }
              }}
            }
            @case ('phone') {
              {{ 'global.validation.phone' | translate }}
            }
            @default {
              {{ 'global.validation.unknownError' | translate }}
            }
          }
        </mat-error>
      }
    }
  `,
})
export class FieldErrorsComponent {
  field = input.required<AbstractControl>();

  errorKeys() {
    return Object.keys(this.field().errors ?? {});
  }
}
