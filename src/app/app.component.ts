import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
   quotes = [
     new Quote(1,"Do one thing every day that scares you.","Author: Jonson",new Date(2019,5,27)),
     new Quote(2,"Keep your face to the sunshine and you cannot see a shadow.","Author: Tony",new Date(2019,5,28)),
     new Quote(3,"It is never too late to be what you might have been.","Author: Kelvin",new Date(2019,5,29)),
     new Quote(4,"What's meant to be will always find a way.","Author: Seth",new Date(2019,5,30)),
     new Quote(5,"The unexamined life is not worth living.","Author: Seth",new Date(2019,5,31) ),
     new Quote(6,"And still after all this time the sun never says to the earth you owe me.","Author: Annete",new Date(2019,6,1))
   ]
}
