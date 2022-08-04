import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarModule } from './components/navbar/navbar.module';
import { NotesContainerModule } from './components/notes-container/notes-container.module';
import { SideMenuModule } from './components/side-menu/side-menu.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    SideMenuModule,
    FontAwesomeModule,
    NotesContainerModule,
  ],
  exports: [
    NavbarModule,
    SideMenuModule,
    FontAwesomeModule,
    NotesContainerModule,
  ],
})
export class SharedModule {}
