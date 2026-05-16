import { Component } from '@angular/core';
import { SignalFormsComponent } from './signal-forms/signal-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [SignalFormsComponent, ReactiveFormsComponent, MatTabsModule],
})
export class ContactComponent {}
