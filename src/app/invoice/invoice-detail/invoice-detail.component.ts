import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Invoice } from '../Invoice';
import { RouteParamsService } from '../../shared/services/route-params.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})

export class InvoiceDetailComponent {
  public invoice$:Observable<Invoice>

  constructor(route: ActivatedRoute, paramsService:RouteParamsService) {
    
    paramsService.setRoute(route); // pass current route (InvoiceDetail) to service

    this.invoice$ = route.data.pipe(
      map(data => {
        return data['invoice'].length ? data['invoice'][0] : data['invoice'];
      })
    )
  }

}
