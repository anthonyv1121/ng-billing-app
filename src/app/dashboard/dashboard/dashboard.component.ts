import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DashboardWidgetService } from '../dashboard-widget.service';
import { GET_LATEST_RESULTS } from '../../shared/constants/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public dashboardData$: Observable<any>;

  constructor(private dwidgetService:DashboardWidgetService) {
    this.dashboardData$ = this.dwidgetService.getWidgetData(GET_LATEST_RESULTS());
   }
   
}
