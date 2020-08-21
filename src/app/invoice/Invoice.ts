export interface Invoice {
    id: number;
    clientId:string;
    date:string;
    client:{
      name:string;
      address: {
        street:string
        city:string
      };
      contact:string
    };
    services:[
      {item:string; quantity:number; unitCost:number; total:number}
    ];
    totalCost:number;
    balance:number;
    status:string;
    year:string;
    notes?:string;
    linkedInvoice?:string
  }