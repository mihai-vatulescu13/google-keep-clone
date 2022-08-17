import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appModal]',
})
export class ModalDirective {
  constructor(private element: ElementRef) {}

  @Output() public closeModal = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any): void {
    const clickedOutside: boolean = this.element.nativeElement.contains(target);

    console.log(clickedOutside);

    if (!clickedOutside) {
      this.closeModal.emit();
    }
  }
}
