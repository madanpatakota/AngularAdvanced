import { Directive, ElementRef , HostBinding, HostListener, Input, OnInit } from '@angular/core';


//Hike ---> If your work is useful for the team ---> first place
//     ---> that is only belonging to you --> 5 to 8 %


@Directive({
  selector: '[appAdvancedcolor]'
})
export class AdvancedcolorDirective implements OnInit {


  //wen i mouse over to the element i want to make the bgcolor is brown and color is white


  // var               _abc:any
    @Input('BGColor')  _bgColor:any;
    @Input('color')    _color:any;

    @Input('mouseenterColor') _mouseenterColor : any;
    @Input('mouseleaveColor') _mouseleaveColor : any;


    @HostBinding('style.fontSize') _fontSize : any;
  
  
  //element(p) background-color is green color : red
  constructor(public elementRef : ElementRef)
    { }

   //backgorund color
  //First you need to capture 
  // then you apply the styles to the elment
  ngOnInit(): void {
      console.log("element is" , this.elementRef);
      this.elementRef.nativeElement.style.background = this._bgColor ;

      //you are trying to get the element and applying the style color
      this.elementRef.nativeElement.style.color =  this._color ;

      //you are trying to apply color to the hostelement
      this._fontSize = "30px";

      //this.elementRef
  }


  // <p id="p" mouseover=></p>

  @HostListener('mouseover') mouseenter(){
    this.elementRef.nativeElement.style.background = this._mouseenterColor ;
  }


  @HostListener('mouseleave') mouseleave(){
    this.elementRef.nativeElement.style.background = this._mouseleaveColor ;
  }




}
