export class User {
  empname:string;
    constructor(
        public addressLine1:string,
        public addressLine2:string,
        public name:string,
        public email:string,
        public Phone:number,
        public topics:string,
        public timepreference:string,
        public subscribe:boolean
    )
    {
        this.empname=name;
    }
}
