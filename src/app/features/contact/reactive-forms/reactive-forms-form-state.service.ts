import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormModel, EmailContact } from './models/contact.model';
import { phoneValidator } from '@forms/phone.validator';

@Injectable()
export class ReactiveFormsFormStateService {
  private readonly fb = inject(FormBuilder);
  private _form!: FormGroup<ContactFormModel>;

  public buildForm() {
    this._form = this.fb.nonNullable.group({
      name: this.fb.nonNullable.control('', Validators.required),
      lastName: this.fb.nonNullable.control('', Validators.required),
      message: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(10)]),
      isCompany: this.fb.nonNullable.control(false),
      companyName: this.fb.nonNullable.control(''),
      contact: this.fb.nonNullable.array<FormGroup<EmailContact>>([this.createContact()]),
      topic: this.fb.nonNullable.control('', Validators.required),
      rodoConsent: this.fb.nonNullable.control('', Validators.requiredTrue),
    });
  }

  get form(): FormGroup<ContactFormModel> {
    return this._form;
  }

  email(index: number) {
    return this.form.controls.contact.at(index).controls.email;
  }

  phone(index: number) {
    return this.form.controls.contact.at(index).controls.phone;
  }

  addItem(): void {
    this.form.controls.contact.push(this.createContact());
  }

  deleteItem(index: number): void {
    this.form.controls.contact.removeAt(index);
  }

  submit(): void {
    this._form.markAllAsTouched();
  }

  private createContact(): FormGroup<EmailContact> {
    return this.fb.nonNullable.group({
      email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
      phone: this.fb.nonNullable.control('', [Validators.required, phoneValidator]),
    });
  }
}
