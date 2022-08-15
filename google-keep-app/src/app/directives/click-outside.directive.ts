import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  constructor(private element: ElementRef) {}

  @Output() public clickedOutside = new EventEmitter();
  @Output() public clickedInside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any): void {
    const clickInside: boolean = this.element.nativeElement.contains(target);

    if (!clickInside) {
      this.clickedOutside.emit();
    } else {
      this.clickedInside.emit();
    }
  }
}
