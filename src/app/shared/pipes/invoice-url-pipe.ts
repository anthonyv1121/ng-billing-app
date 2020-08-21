import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invoiceUrl'
})
export class InvoiceUrlPipe implements PipeTransform {

  transform(invoice:any): string {
        const {year, clientId, date} = invoice;
        return `/invoices/${year}/${clientId}/${date}`
  }

}
