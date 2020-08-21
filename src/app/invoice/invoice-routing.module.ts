import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesAllComponent } from './invoices-all/invoices-all.component';
import { InvoicesDueComponent } from './invoices-due/invoices-due.component';
import { InvoicesPaidComponent } from './invoices-paid/invoices-paid.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceRoutingService } from '../shared/services/invoice-routing.service';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';

const routes: Routes = [
  {path:'',component:InvoicesListComponent, redirectTo:new Date().getFullYear().toString(), pathMatch:'full'},
  {path:'all', component:InvoicesAllComponent},
  {path:'due', component:InvoicesDueComponent},
  {path:'paid', component:InvoicesPaidComponent},
  {path:'create', component:CreateInvoiceComponent},
  {path:'create/:id', component:CreateInvoiceComponent, resolve: { invoice: InvoiceRoutingService }},
  {path:':year', component:InvoicesListComponent, resolve: { invoicesList: InvoiceRoutingService }},
  {path:':year/:clientId', component:InvoicesListComponent,  resolve: { invoicesList: InvoiceRoutingService }},
  {path:':year/:clientId/:date', component:InvoiceDetailComponent, resolve: { invoice: InvoiceRoutingService }},
  {path:'*', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
