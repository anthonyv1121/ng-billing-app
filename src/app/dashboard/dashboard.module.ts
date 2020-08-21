import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module'

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaidWidgetComponent } from './paid-widget/paid-widget.component';
import { DueWidgetComponent } from './due-widget/due-widget.component';
import { DashboardWidgetService } from '../dashboard/dashboard-widget.service';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, PaidWidgetComponent, DueWidgetComponent],
  providers:[DashboardWidgetService]
})
export class DashboardModule { }
