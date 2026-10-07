import { AbstractControl, ValidationErrors } from '@angular/forms';
import { REGEX } from './regex';

export function phoneValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;

  const value = (control.value ?? '').trim();
  return REGEX.phone.test(value) ? null : { phone: true };
}
