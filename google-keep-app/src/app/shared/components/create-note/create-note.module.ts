import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextfieldModule } from '../textfield/textfield.module';
import { CreateNoteComponent } from './create-note.component';

@NgModule({
  declarations: [CreateNoteComponent],
  imports: [CommonModule, TextfieldModule],
  exports: [CreateNoteComponent],
})
export class CreateNoteModule {}
