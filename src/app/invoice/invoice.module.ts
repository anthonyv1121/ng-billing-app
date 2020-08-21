import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module'
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceHeaderComponent } from './invoice-detail/invoice-header/invoice-header.component';
import { ClientInfoComponent } from './invoice-detail/client-info/client-info.component';
import { InvoicesDueComponent } from './invoices-due/invoices-due.component';
import { InvoicesPaidComponent } from './invoices-paid/invoices-paid.component';
import { InvoicesAllComponent } from './invoices-all/invoices-all.component';
import { InvoicesTableComponent } from './invoices-table/invoices-table.component';
import { InvoicesBreadcrumbComponent } from './invoices-breadcrumb/invoices-breadcrumb.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { ServicesTableComponent } from './invoice-detail/services-table/services-table.component';
import { InvoiceNotesComponent } from './invoice-detail/invoice-notes/invoice-notes.component';
import { InvoiceMastheadComponent } from './invoice-detail/invoice-header/invoice-masthead/invoice-masthead.component';
import { InvoiceMetaComponent } from './invoice-detail/invoice-header/invoice-meta/invoice-meta.component';
import { LinkedInvoiceComponent } from './invoice-detail/linked-invoice/linked-invoice.component';
import { InvoiceActionsComponent } from './invoice-detail/invoice-actions/invoice-actions.component';
import { PaymentAddressComponent } from './payment-address/payment-address.component';
import { InvoiceStatusComponent } from './invoice-detail/invoice-status/invoice-status.component';

@NgModule({
  imports: [
    SharedModule,
    InvoiceRoutingModule
  ],
  declarations: [InvoicesListComponent, InvoiceDetailComponent, InvoiceHeaderComponent, ClientInfoComponent, InvoicesDueComponent, InvoicesPaidComponent, InvoicesAllComponent, InvoicesTableComponent, InvoicesBreadcrumbComponent, CreateInvoiceComponent, ServicesTableComponent, InvoiceNotesComponent, InvoiceMastheadComponent, InvoiceMetaComponent, LinkedInvoiceComponent, InvoiceActionsComponent, PaymentAddressComponent, InvoiceStatusComponent],
  providers:[]
})
export class InvoiceModule { }
