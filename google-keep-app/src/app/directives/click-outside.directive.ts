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

    if (this.element.nativeElement.id === 'note') {
      this.clickedInside.emit();
      return;
    }

    if (!clickInside) {
      this.clickedOutside.emit();
      // console.log('clicked outside');
    } else {
      this.clickedInside.emit();
      // console.log('clicked inside');
    }
  }
}
