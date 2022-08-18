import { Component, Input } from '@angular/core';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { NotesService } from 'src/app/services/notes.service';
import { NoteModel } from '../../models/note.component.model';
import { colorsOptions } from './note.data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  //between note and modal components noteContent parameter is common and thats why the color gets changed to both situations
  @Input() noteContent: NoteModel;

  public isColorMenuOpen: boolean = false;
  public colors: string[] = colorsOptions;
  public brushIcon = faBrush;

  constructor(public notesService: NotesService) {}

  ngOnInit() {}

  public onOpenColorsMenu(): void {
    console.log('modal properties:', this.noteContent.selectedColor);
    this.isColorMenuOpen = !this.isColorMenuOpen;
  }

  public onSetNoteColor(selectedColor: string): void {
    // here we need o call a service method that send the chages to the server:
    this.noteContent.selectedColor = selectedColor;

    this.notesService.updateNote(this.noteContent).subscribe((res) => {
      // this must update the selected note color:
      this.noteContent = res;
      console.log('note update with success! form modal', res);
    });
  }
}
