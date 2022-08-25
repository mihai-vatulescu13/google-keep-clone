import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DrawNoteComponent } from './draw-note.component';

@NgModule({
  declarations: [DrawNoteComponent],
  imports: [CommonModule],
  exports: [DrawNoteComponent],
})
export class DrawNoteModule {}
