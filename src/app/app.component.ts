import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
   quotes:string[];
  constructor(){
    this.quotes = ["The earth is round","Let the sleeping dog lie","You get what you plant"]
  }
}
