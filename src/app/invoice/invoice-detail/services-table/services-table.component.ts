import { Component, OnInit, Input } from '@angular/core';
import { SERVICE_TABLE_FIRST_ROW_WIDTH } from '../../../shared/constants/constants';

@Component({
  selector: 'app-services-table',
  templateUrl: './services-table.component.html',
  styleUrls: ['./services-table.component.scss']
})
export class ServicesTableComponent implements OnInit {

  @Input() services:any[]
  public columnKeys = ['item', 'unitCost', 'quantity', 'total'];
  public columnHeaders = ['Service', 'Unit Cost', 'Quantity/Hours', 'Total'];
  public serviceColW = SERVICE_TABLE_FIRST_ROW_WIDTH;
  
  constructor() { }

  ngOnInit() {
  }

}
