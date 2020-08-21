import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {path:'dashboard', loadChildren:'../dashboard/dashboard.module#DashboardModule'},
  {path:'invoices', loadChildren:'../invoice/invoice.module#InvoiceModule'},
  {path:'**', redirectTo:'dashboard'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
