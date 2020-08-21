import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <p class="error">
      <strong>Error:</strong> {{error}}
    </p>
  `,
  styles: []
})
export class ErrorComponent{

  @Input() error:string
  constructor() { }

}
