import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface ContactFormModel {
  name: FormControl<string>;
  lastName: FormControl<string>;
  message: FormControl<string>;
  isCompany: FormControl<boolean>;
  companyName: FormControl<string>;
  contact: FormArray<FormGroup<EmailContact>>;
  topic: FormControl<string>;
  rodoConsent: FormControl<string>;
}

export interface EmailContact {
  email: FormControl<string>;
  phone: FormControl<string>;
}
