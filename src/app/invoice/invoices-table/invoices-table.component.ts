import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoices-table',
  templateUrl: './invoices-table.component.html',
  styleUrls: ['./invoices-table.component.scss'],
})
export class InvoicesTableComponent {

  @Input() data:any[];
  public columns = ['date', 'client', 'status', 'balance', 'actions'];
  
  constructor() { }

}
