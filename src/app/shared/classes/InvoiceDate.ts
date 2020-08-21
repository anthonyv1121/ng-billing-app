export class InvoiceDate {
    year: string;
    month: string;
    day: string;
    invoiceDate: string;
  
    constructor(iso:string) {
        let date = new Date(iso);
        this.year = date.getFullYear().toString();
        this.month = this.setZeroFormat(date.getMonth()+1);
        this.day = this.setZeroFormat(date.getDate());
        this.invoiceDate = `${this.month}-${this.day}-${this.year}`
    }
  
    private setZeroFormat = (value:any) =>{
        return  value < 10 ? `0${value}` : value
    }
  
  }
  
