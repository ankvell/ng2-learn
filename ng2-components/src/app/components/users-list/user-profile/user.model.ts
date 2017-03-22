export class User {
  constructor(
    public name: Object,
    public company: string,
    public phone: string,
    public email: string,
    public address: string,
    public about: string,
    public greeting?: string,
    public tags?: Array<string>,
    public friends?: Array<any>,
    public isActive?: boolean,
    public picture?: string,
  ) { 
   
  }
}
