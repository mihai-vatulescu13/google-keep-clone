import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from './components/button/button.module';
import { CreateNoteModule } from './components/create-note/create-note.module';
import { ImgUploadModule } from './components/img-upload/img-upload.module';
import { ModalModule } from './components/modal/modal.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { NoteModule } from './components/note/note.module';
import { NotesContainerModule } from './components/notes-container/notes-container.module';
import { SearchModule } from './components/search/search.module';
import { SideMenuModule } from './components/side-menu/side-menu.module';

const utilitiesModules = [
  NavbarModule,
  SideMenuModule,
  FontAwesomeModule,
  NotesContainerModule,
  ButtonModule,
  NoteModule,
  CreateNoteModule,
  ModalModule,
  SearchModule,
  ImgUploadModule,
];

@NgModule({
  imports: [CommonModule, [...utilitiesModules]],
  exports: [utilitiesModules],
})
export class SharedModule {}
