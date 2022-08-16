import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from './components/button/button.module';
import { CreateNoteModule } from './components/create-note/create-note.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { NoteModule } from './components/note/note.module';
import { NotesContainerModule } from './components/notes-container/notes-container.module';
import { SideMenuModule } from './components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    SideMenuModule,
    FontAwesomeModule,
    NotesContainerModule,
    ButtonModule,
    NoteModule,
    CreateNoteModule,
  ],
  exports: [
    NavbarModule,
    SideMenuModule,
    FontAwesomeModule,
    NotesContainerModule,
    ButtonModule,
    NoteModule,
    CreateNoteModule,
  ],
})
export class SharedModule {}
