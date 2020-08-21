import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators/map';
import { Invoice } from '../Invoice';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
}) 
export class InvoicesListComponent  {

  public invoices$: Observable<Invoice[]>;
  public year: string;
  public isClientList:boolean;

  constructor(route: ActivatedRoute) {    

      this.isClientList = route.snapshot.params['clientId']    
    
      this.year = route.snapshot.params['year'];

      this.invoices$ = route.data.pipe(map(data => data['invoicesList'])); 
   }

}

