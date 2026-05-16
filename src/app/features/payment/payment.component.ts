import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PaymentGatewayModalComponent } from './components/payment-gateway-modal.component/payment-gateway-modal.component';

@Component({
  selector: 'app-payment',
  template: ``,
})
export class PaymentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private dialog = inject(MatDialog);
  private router = inject(Router);

  ngOnInit() {
    const orderId = this.route.snapshot.paramMap.get('id');

    const dialogRef = this.dialog.open(PaymentGatewayModalComponent, {
      data: { orderId },
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/shop/cart']);
    });
  }
}
