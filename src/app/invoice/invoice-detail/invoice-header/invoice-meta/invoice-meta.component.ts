import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-meta',
  templateUrl: './invoice-meta.component.html',
  styleUrls: ['./invoice-meta.component.scss']
})
export class InvoiceMetaComponent {

  @Input() date:string;
  @Input() balance:string;
  @Input() status:string;
  @Input() linkedInvoice:string;

  constructor() { }

}
