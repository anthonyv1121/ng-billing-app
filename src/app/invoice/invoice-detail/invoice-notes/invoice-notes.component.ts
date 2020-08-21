import { Component, Input, AfterViewInit  } from '@angular/core';
import { NOTES_TO_CLIENT, GET_CSS_VALUE } from '../../../shared/constants/constants';

@Component({
  selector: 'app-invoice-notes',
  templateUrl: './invoice-notes.component.html',
  styleUrls: ['./invoice-notes.component.scss']
})
export class InvoiceNotesComponent implements AfterViewInit  {

  @Input() desposit:boolean;
  @Input() notes:string;
  public depositNote = NOTES_TO_CLIENT.deposit;
  public paymentNote = NOTES_TO_CLIENT.payment;
  public thankYouNote = NOTES_TO_CLIENT.thankYou;
  public componentPadding:string;

  constructor() {}

  ngAfterViewInit(){
    this.componentPadding = GET_CSS_VALUE(document.querySelector('.mat-row'), 'padding');
    document.getElementsByTagName('app-invoice-notes')[0]['style'].padding = this.componentPadding;
  }

}
