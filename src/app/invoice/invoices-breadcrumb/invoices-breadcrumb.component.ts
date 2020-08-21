import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invoices-breadcrumb',
  templateUrl: './invoices-breadcrumb.component.html',
  styleUrls: ['./invoices-breadcrumb.component.scss']
})
export class InvoicesBreadcrumbComponent {

  @Input() year:string;
  @Input() clientName:string;

  constructor() { }

}
