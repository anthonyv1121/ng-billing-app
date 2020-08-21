import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-invoice-header',
  templateUrl: './invoice-header.component.html',
  styleUrls: ['./invoice-header.component.scss']
})
export class InvoiceHeaderComponent {

  @Input() invoiceInfo:{};

  constructor() { }
}
