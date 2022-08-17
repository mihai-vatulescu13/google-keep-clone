import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from '../../directives/directives.module';
import { TextfieldModule } from '../textfield/textfield.module';
import { CreateNoteComponent } from './create-note.component';

@NgModule({
  declarations: [CreateNoteComponent],
  imports: [CommonModule, TextfieldModule, DirectivesModule],
  exports: [CreateNoteComponent],
})
export class CreateNoteModule {}
