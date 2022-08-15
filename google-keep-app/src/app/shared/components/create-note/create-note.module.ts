import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from 'src/app/directives/click-outside.directive';
import { TextfieldModule } from '../textfield/textfield.module';
import { CreateNoteComponent } from './create-note.component';

@NgModule({
  declarations: [CreateNoteComponent, ClickOutsideDirective],
  imports: [CommonModule, TextfieldModule],
  exports: [CreateNoteComponent],
})
export class CreateNoteModule {}
