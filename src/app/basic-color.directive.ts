import { Directive, ElementRef , OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicColor]'
})
export class BasicColorDirective implements OnInit {


  
  //element(p) background-color is green color : red
  constructor(public elementRef : ElementRef)
    { }

   //backgorund color
  //First you need to capture 
  // then you apply the styles to the elment
  ngOnInit(): void {
      

      console.log("element is" , this.elementRef);

      
      this.elementRef.nativeElement.style.background = 'green';
      this.elementRef.nativeElement.style.color = 'red';

      //this.elementRef
  }


}
