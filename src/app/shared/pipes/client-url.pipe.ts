import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientUrl'
})
export class ClientUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
