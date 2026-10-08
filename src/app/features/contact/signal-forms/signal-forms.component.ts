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
import { phoneSchema, scrollToFirstError, SignalFieldErrorsComponent } from '@seppsher/ui';
import { Contact, ContactFormModel } from './models/contact.model';
import { MatSelectModule } from '@angular/material/select';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-signal-forms',
  templateUrl: './signal-forms.component.html',
  styleUrls: ['./signal-forms.component.scss'],
  imports: [
    FormField,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SignalFieldErrorsComponent,
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
        action: async () => undefined,
        onInvalid: () => {
          scrollToFirstError();
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
