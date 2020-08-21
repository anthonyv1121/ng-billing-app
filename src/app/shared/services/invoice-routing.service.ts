import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { InvoiceDataService } from './invoice-data.service';
import { Invoice } from '../../invoice/model/Invoice';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { DEFAULT_LATEST_RESULTS } from '../constants/constants';


@Injectable()
export class InvoiceRoutingService implements Resolve<Invoice[]> {

  private routeParams:Params;

  constructor(private invoiceDataService:InvoiceDataService, private router:Router) {}

  resolve(route:ActivatedRouteSnapshot){
    this.routeParams = route.params;
console.log(this.routeParams);

    return this.invoiceDataService.getInvoices( this.query(this.routeParams) + DEFAULT_LATEST_RESULTS )
      .pipe(
        map(this.verifyData, this)
      );
  }

  private verifyData(response:any){
    if(response.length){
      console.log(response);
      
      return response;
    }
    else if(this.routeParams['date']){ // single invoice
      return Observable.throw("The invoice has not been found. Likely a bad URL."); // TODO: this throws an error
    }
  //  this.router.navigate(['/invoices']);
  }
  
  private query(params:Params):string{
    return Object.keys(params)
                 .map(key => key + '=' + params[key])
                 .join('&');
  }

  test(){
    return this.routeParams
  }

}


