import { Component, Input } from '@angular/core';
import { RouteParamsService } from '../../../shared/services/route-params.service';
import { CONSTRUCT_INVOICE_URL } from '../../../shared/constants/constants';

interface Client {
  name: string;
  address: { street: string; city: string };
  contact: string;
}

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent {

  @Input() client:Client;

  constructor(private paramsService:RouteParamsService) { }

  public setClientUrl(){
    return CONSTRUCT_INVOICE_URL([this.paramsService.year, this.paramsService.clientId])
  }
}
