import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatError } from '@angular/material/form-field';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-field-errors',
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
export class ReactiveFieldErrorsComponent {
  field = input.required<AbstractControl>();

  errorKeys() {
    return Object.keys(this.field().errors ?? {});
  }
}
