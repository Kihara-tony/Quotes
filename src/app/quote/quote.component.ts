import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,"Do one thing every day that scares you.","Author: Jonson",new Date(2019,5,27)),
    new Quote(2,"Keep your face to the sunshine and you cannot see a shadow.","Author: Tony",new Date(2019,5,28)),
    new Quote(3,"It is never too late to be what you might have been.","Author: Kelvin",new Date(2019,5,29)),
    new Quote(4,"What's meant to be will always find a way.","Author: Seth",new Date(2019,5,30)),
    new Quote(5,"The unexamined life is not worth living.","Author: Pamela",new Date(2019,5,31) ),
    new Quote(6,"And still after all this time the sun never says to the earth you owe me.","Author: Annete",new Date(2019,6,1))
  ]
  completeQuote(isComplete: any,index: number){
    if(isComplete){
      this.quotes.splice(index,1)
    }
  }
  quoteDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
