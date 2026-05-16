import { AbstractControl, ValidationErrors } from '@angular/forms';
import { REGEX } from './regex';

export function phoneValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  const value = (control.value ?? '').trim();
  const isValid = REGEX.phone.test(value);

  return isValid ? null : { phone: true };
}
