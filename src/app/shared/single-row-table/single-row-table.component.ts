import { Component, Input } from '@angular/core';
import { SINGLE_ROW_TABLE_FIRST_CELL_WIDTH} from '../constants/constants';

@Component({
  selector: 'app-single-row-table',
  templateUrl: './single-row-table.component.html',
  styleUrls: ['./single-row-table.component.scss']
})
export class SingleRowTableComponent{

  @Input() rows:any[];
  @Input() id:string;
  @Input() offsetW:number = 0

  public firstCellW:number;

  public columnKeys = ['label', 'value']
  
  constructor() {
    this.firstCellW = SINGLE_ROW_TABLE_FIRST_CELL_WIDTH() // 3 is an offset
  }


}
