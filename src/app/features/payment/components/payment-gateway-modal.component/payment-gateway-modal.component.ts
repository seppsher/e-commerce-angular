import { Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-payment-gateway-modal',
  templateUrl: './payment-gateway-modal.component.html',
  styleUrls: ['./payment-gateway-modal.component.scss'],
  imports: [MatIconModule, MatButtonModule, MatDialogContent, MatDialogActions, TranslatePipe],
})
export class PaymentGatewayModalComponent {
  private dialogRef = inject(MatDialogRef<PaymentGatewayModalComponent>);

  close() {
    this.dialogRef.close();
  }
}
