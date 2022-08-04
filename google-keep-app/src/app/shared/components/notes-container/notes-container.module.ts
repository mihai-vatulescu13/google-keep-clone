import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoteModule } from '../note/note.module';
import { NotesContainerComponent } from './notes-container.component';

@NgModule({
  declarations: [NotesContainerComponent],
  imports: [CommonModule, NoteModule],
  exports: [NotesContainerComponent],
})
export class NotesContainerModule {}
