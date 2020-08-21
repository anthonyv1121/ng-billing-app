import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.scss']
})
export class InvoiceItemComponent implements OnInit {

  @Input() header:string;
  @Input() data:string | number;
  @Input() key:string;

  constructor() { }

  ngOnInit() {
  }

}
