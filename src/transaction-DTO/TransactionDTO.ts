export class TransactionDTO{
    constructor(
        public id:number|null,
        public text:string,
        public amount:number
    ) {
    }
}