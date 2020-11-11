import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[alpCreationDateStyling]'
})
export class CreationDateStylingDirective implements OnInit{
  @Input('alpCreationDateStyling') public date: Date;

  constructor(private element: ElementRef) { 
  }

  ngOnInit(): void {
    let color: string = this.element.nativeElement.style.borderColor;
    let now: Date = new Date();
    let twoWeeksBefore: Date = new Date();
    twoWeeksBefore.setDate(twoWeeksBefore.getDate() - 14);
    if (this.date > now) {
      color = 'blue';
    }
    else if (this.date > twoWeeksBefore) {
      color = 'green';
    }
    this.element.nativeElement.style.borderColor = color;
    this.element.nativeElement.style.borderStyle = "solid";
  } 
}
