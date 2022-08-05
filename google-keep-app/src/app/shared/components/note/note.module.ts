import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from '../button/button.module';
import { NoteComponent } from './note.component';

@NgModule({
  declarations: [NoteComponent],
  imports: [CommonModule, ButtonModule, FontAwesomeModule],
  exports: [NoteComponent],
})
export class NoteModule {}
