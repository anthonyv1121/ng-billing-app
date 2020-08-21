import { Service } from "./Service";

export class Invoice {
    constructor(
        public id: number,
        public clientId: string,
        public date: string,
        public client:{
            name:string,
            address: {
              street:string,
              city:string
            },
            contact:string
          },
        public services:Service[],
        public totalCost: number,
        public balance: number,
        public status : string,
        public depositCheckbox: boolean,
        public depositAmt: number,
        public year : string,
        public notes?:string,
        public linkedInvoice?:string
    ){ }
}

