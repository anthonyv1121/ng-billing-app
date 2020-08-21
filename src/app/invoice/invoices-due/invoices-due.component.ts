import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '../model/Invoice';
import { InvoiceDataService } from '../../shared/services/invoice-data.service';
import { GET_LATEST_RESULTS } from '../../shared/constants/constants';

@Component({
  selector: 'app-invoices-due',
  templateUrl: './invoices-due.component.html',
  styleUrls: ['./invoices-due.component.scss']
})
export class InvoicesDueComponent {

  public dueInvoices: Observable<Invoice[]>;

  constructor(private invoiceDataService:InvoiceDataService) {
   this.dueInvoices = this.invoiceDataService.getInvoices(`status=due&${GET_LATEST_RESULTS()}`);
  }

}
