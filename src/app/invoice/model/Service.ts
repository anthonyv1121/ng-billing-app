export class Service {
    constructor (
        public item:string = '',
        public quantity:number | string = '',
        public unitCost:number | string = '',
        public total:number = 0
    ){}
  }