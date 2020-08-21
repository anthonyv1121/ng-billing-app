import { Component, Input } from '@angular/core';
import { RouteParamsService } from '../../../shared/services/route-params.service';
import { CONSTRUCT_INVOICE_URL } from '../../../shared/constants/constants';

@Component({
  selector: 'app-linked-invoice',
  templateUrl: './linked-invoice.component.html',
  styleUrls: ['./linked-invoice.component.scss']
})
export class LinkedInvoiceComponent {

  @Input() invoiceDate:string;
  
  constructor(private paramsService:RouteParamsService) {}

  public setLinkedUrl(){
    return CONSTRUCT_INVOICE_URL([this.paramsService.year, this.paramsService.clientId, this.invoiceDate])
  }
}

