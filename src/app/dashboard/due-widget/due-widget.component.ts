import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-due-widget",
  templateUrl: "./due-widget.component.html",
  styleUrls: ["./due-widget.component.scss"],
})
export class DueWidgetComponent {
  @Input() dueInvoices: any[];
  public latestDue;

  constructor() {}

  ngOnInit() {
    this.latestDue = this.dueInvoices[0];
    console.log({ l: this.latestDue });
  }
}
