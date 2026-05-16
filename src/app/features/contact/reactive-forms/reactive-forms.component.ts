import { Component, DestroyRef, inject, OnInit } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { ReactiveFormsFormStateService } from './reactive-forms-form-state.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSelectModule } from '@angular/material/select';
import { FieldErrorsComponent } from '@components/field-errors/reactive-forms/field-errors.component';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollToFirstErrorDirective } from '@directives/scroll-to-error.directive';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FieldErrorsComponent,
    MatCheckbox,
    MatSelectModule,
    TranslatePipe,
    ScrollToFirstErrorDirective,
  ],
  providers: [ReactiveFormsFormStateService],
})
export class ReactiveFormsComponent implements OnInit {
  public readonly reactiveFormsFormStateService = inject(ReactiveFormsFormStateService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.reactiveFormsFormStateService.buildForm();
    this.watchIsCompanyValue();
  }

  private watchIsCompanyValue() {
    this.reactiveFormsFormStateService.form.controls.isCompany.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
        if (value) {
          this.reactiveFormsFormStateService.form.controls.companyName.setValidators([
            Validators.required,
          ]);
          this.reactiveFormsFormStateService.form.controls.companyName.updateValueAndValidity();
        } else {
          this.reactiveFormsFormStateService.form.controls.companyName.clearValidators();
          this.reactiveFormsFormStateService.form.controls.companyName.updateValueAndValidity();
        }
      });
  }
}
