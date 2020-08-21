import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-actions',
  templateUrl: './invoice-actions.component.html',
  styleUrls: ['./invoice-actions.component.scss']
})
export class InvoiceActionsComponent {

  @Input() id:number;
  
  constructor(private router:Router) { }

  public print(){
    window.print();
  }
  public edit(){
     this.router.navigate(['/invoices/create', this.id]); 
  }

}
