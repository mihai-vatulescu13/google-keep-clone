import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from 'src/app/directives/click-outside.directive';
import { ModalDirective } from 'src/app/directives/modal.directive';

@NgModule({
  declarations: [ClickOutsideDirective, ModalDirective],
  imports: [CommonModule],
  exports: [ClickOutsideDirective, ModalDirective],
})
export class DirectivesModule {}
