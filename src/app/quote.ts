export class Quote {
  public showDescription:boolean;
  completeDate: Date;
  constructor(public id:number, public name:string, public description:string ,public timeSpan:Date){
    this.showDescription=false
  }
}
