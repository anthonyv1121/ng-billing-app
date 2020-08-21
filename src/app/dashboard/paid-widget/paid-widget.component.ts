import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paid-widget',
  templateUrl: './paid-widget.component.html',
  styleUrls: ['./paid-widget.component.scss']
})
export class PaidWidgetComponent {
  @Input() public paidInvoices: any[];
  public displayedColumns = ['date', 'client', 'balance', 'view'];

  constructor(private router:Router) {}
}
