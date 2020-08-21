import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  constructor() { }

  @Input() title:string;
  @Input() content:string;

  ngOnInit() {
  }

}
