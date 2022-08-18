import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoteComponent } from './note.component';

@NgModule({
  declarations: [NoteComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [NoteComponent],
})
export class NoteModule {}
