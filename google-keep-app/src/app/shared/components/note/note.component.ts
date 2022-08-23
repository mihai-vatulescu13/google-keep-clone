import { Component, Input, OnInit } from '@angular/core';
import { faBrush, faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { backgroundNotesImages } from 'src/app/data/background-notes-images';
import { colorsOptions } from 'src/app/data/note.data';
import { ModalService } from 'src/app/services/modal.service';
import { NotesService } from 'src/app/services/notes.service';
import { NoteModel } from '../../models/note.component.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() noteContent: NoteModel;

  public isColorMenuOpen: boolean = false;
  public colors: string[] = colorsOptions;
  public backgroundImages: string[] = backgroundNotesImages;
  public brushIcon = faBrush;
  public pinnedIcon = faThumbTack;
  public activePinButton: boolean = false;

  constructor(
    public notesService: NotesService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {}

  public onOpenColorsMenu(event: any): void {
    event.stopPropagation();
    this.isColorMenuOpen = !this.isColorMenuOpen;
  }

  public onSetNoteColor(selectedColor: string, event: any): void {
    event.stopPropagation();

    this.noteContent.selectedColor = selectedColor;
    this.noteContent.backgroundImage = '';

    this.notesService.updateNote(this.noteContent).subscribe((res) => {
      this.noteContent = res;
      // console.log('note update with success! From component', res);
    });
  }

  public onSetNoteBackgroundImage(selectedImg: string, event: any): void {
    event.stopPropagation();

    this.noteContent.backgroundImage = selectedImg;
    this.noteContent.selectedColor = '';

    this.notesService.updateNote(this.noteContent).subscribe((res) => {
      this.noteContent = res;
      // console.log('note update with success! From component', res);
    });
  }

  public toggleActivePinNote(): void {
    this.activePinButton = !this.activePinButton;
  }

  public onToggleNote(event: any): void {
    event.stopPropagation();

    this.modalService.setModal({
      ...this.noteContent,
      isPinned: !this.noteContent.isPinned,
    });

    this.notesService
      .updateNote({
        ...this.noteContent,
        isPinned: !this.noteContent.isPinned,
      })
      .subscribe((updatedNote) => {
        this.notesService.setNotesAfterUpdate(updatedNote);
      });
  }
}
