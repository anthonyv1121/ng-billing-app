import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '../model/Invoice';
import { InvoiceDataService } from '../../shared/services/invoice-data.service';

@Component({
  selector: 'app-invoices-all',
  templateUrl: './invoices-all.component.html',
  styleUrls: ['./invoices-all.component.scss']
})
export class InvoicesAllComponent{

  public all: Observable<Invoice[]>;

  constructor(private invoiceDataService:InvoiceDataService) {
    this.all = this.invoiceDataService.getInvoices();
   }

}
