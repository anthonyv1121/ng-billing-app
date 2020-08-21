import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Pipe({
  name: 'matTableData'
})
export class MatTableDataPipe implements PipeTransform {

  transform(data: any[]): MatTableDataSource<any> {
    return new MatTableDataSource(data);
  }

}
