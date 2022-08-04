import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoteComponent } from './note.component';

@NgModule({
  declarations: [NoteComponent],
  imports: [CommonModule],
  exports: [NoteComponent],
})
export class NoteModule {}
