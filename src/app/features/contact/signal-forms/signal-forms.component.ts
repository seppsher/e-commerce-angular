import { Component, signal } from '@angular/core';

import {
  form,
  required,
  email,
  minLength,
  FormField,
  applyEach,
  validate,
  apply,
  FormRoot,
} from '@angular/forms/signals';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { phoneSchema } from '@forms/phone.schema';
import { Contact, ContactFormModel } from './models/contact.model';
import { MatSelectModule } from '@angular/material/select';
import { FieldErrorsComponent } from '@components/field-errors/signal-forms/field-errors.component';
import { TranslatePipe } from '@ngx-translate/core';
import { scrollToFirstError } from '@helpers/scroll-to-first-error';

@Component({
  selector: 'app-signal-forms',
  templateUrl: './signal-forms.component.html',
  styleUrls: ['./signal-forms.component.scss'],
  imports: [
    FormField,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FieldErrorsComponent,
    MatCheckbox,
    MatSelectModule,
    TranslatePipe,
    FormRoot,
  ],
})
export class SignalFormsComponent {
  contactModel = signal<ContactFormModel>({
    name: '',
    lastName: '',
    message: '',
    isCompany: false,
    companyName: '',
    contact: [{ email: '', phone: '' }],
    rodoConsent: false,
    topic: '',
  });

  contactForm = form(
    this.contactModel,
    schemaPath => {
      required(schemaPath.name);
      minLength(schemaPath.name, 3);

      required(schemaPath.lastName);
      minLength(schemaPath.lastName, 3);

      required(schemaPath.message);
      minLength(schemaPath.message, 10);

      required(schemaPath.companyName, {
        when: ({ valueOf }) => valueOf(schemaPath.isCompany),
      });

      applyEach(schemaPath.contact, path => {
        required(path.email);
        email(path.email);
        apply(path.phone, phoneSchema);
        required(path.phone);
      });

      required(schemaPath.topic);

      validate(schemaPath.rodoConsent, context => {
        return context.value() === true ? undefined : { kind: 'requiredTrue' };
      });
    },
    {
      submission: {
        action: async () => {
          console.log('Form submitted:', this.contactModel());
        },
        onInvalid: () => {
          scrollToFirstError();
          console.log('Form not submitted:', this.contactModel());
        },
      },
    },
  );

  addItem(contact?: Contact) {
    this.contactModel.update(model => ({
      ...model,
      contact: [...model.contact, contact ?? { phone: '', email: '' }],
    }));
  }

  deleteItem(index: number) {
    this.contactModel.update(model => ({
      ...model,
      contact: [...model.contact.slice(0, index), ...model.contact.slice(index + 1)],
    }));
  }
}
