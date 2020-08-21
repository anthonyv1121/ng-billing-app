import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '../model/Invoice';
import { InvoiceDataService } from '../../shared/services/invoice-data.service';
import { GET_LATEST_RESULTS } from '../../shared/constants/constants';

@Component({
  selector: 'app-invoices-paid',
  templateUrl: './invoices-paid.component.html',
  styleUrls: ['./invoices-paid.component.scss']
})
export class InvoicesPaidComponent {

  public paid: Observable<Invoice[]>;
  
  constructor(private invoiceDataService: InvoiceDataService) {    
    this.paid = this.invoiceDataService.getInvoices(`status=paid&${GET_LATEST_RESULTS()}`);
   }

}
