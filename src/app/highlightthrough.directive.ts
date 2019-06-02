import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightthrough]'
})
export class HighlightthroughDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onclick(){
    this.color("yellow")
  }
  @HostListener("down") onclicks(){
    this.color("none")
  }
  private color(action:string){
    this.elem.nativeElement.style.color=action;

  }

}
