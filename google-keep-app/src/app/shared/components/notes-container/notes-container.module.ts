import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { CreateNoteModule } from '../create-note/create-note.module';
import { ModalModule } from '../modal/modal.module';
import { NoteModule } from '../note/note.module';
import { NotesContainerComponent } from './notes-container.component';

@NgModule({
  declarations: [NotesContainerComponent],
  imports: [
    CommonModule,
    NoteModule,
    ButtonModule,
    CreateNoteModule,
    ModalModule,
  ],
  exports: [NotesContainerComponent],
})
export class NotesContainerModule {}
