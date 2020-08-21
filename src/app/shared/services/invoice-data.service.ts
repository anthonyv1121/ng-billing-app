import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '../../invoice/model/Invoice';

const API = "http://localhost:3000";
const INVOICES_ENDPOINT="/invoices";

@Injectable()
export class InvoiceDataService {

  constructor(private http: HttpClient) {}

  private get(path:string): Observable<any[]>{ 
    console.log(path);
      
    return this.http.get<any[]>(API + path);
  }

  private post(path: string, request: any, params?): Observable<any> {
    request = this.removeWhitespaces(request);
		return this.http.post(API + path, request, {params} || {})
  }

  private put(path: string, request: any, params?): Observable<any> {
    request = this.removeWhitespaces(request);
		return this.http.put(API + path, request, {params} || {})
  }
  
  private toHttpParams(obj: Object): HttpParams {
    return Object.getOwnPropertyNames(obj)
        .reduce((p, key) => p.set(key, obj[key]), new HttpParams());
  }

  private removeWhitespaces(request: any):any{
    	// validation for leading and trailing spaces: trim string parameters
		if (typeof request === 'string') {
			request = request.trim();
		} else {
			for (let attribute in request) {
				if (typeof request[attribute] === 'string') {
					request[attribute] = request[attribute].trim();
				}
			}
    }
    return request;
  }


  public getInvoices(params:string=''): Observable<Invoice[]>{
    let invoicesAPI = params.length ? `${INVOICES_ENDPOINT}?${params}` : API;  
    return this.get(invoicesAPI);
  }

  public postInvoice(invoice:Invoice): Observable<Invoice>{ 
    return this.post(INVOICES_ENDPOINT, invoice);
  }

  public updateInvoice(invoice:Invoice): Observable<any>{ 
    return this.put(`${INVOICES_ENDPOINT}/${invoice['id']}`, invoice);
  }

}
