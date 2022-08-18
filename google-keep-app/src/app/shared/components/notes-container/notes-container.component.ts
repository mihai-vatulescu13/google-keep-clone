import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { NoteModel } from '../../models/note.component.model';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  public noteModalData: NoteModel = {
    title: '',
    text: '',
    selectedColor: '',
  };
  public activeNoteModal: boolean = false;

  constructor(public notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((result) => {
      this.notesService.notesData = result;
    });
  }

  public onOpenModal(note: NoteModel): void {
    this.noteModalData = note;
    this.activeNoteModal = true;
  }

  public onCloseModal(): void {
    console.log('sersdf');
    this.activeNoteModal = false;
  }

  //keep modal content component active using event bubbling to avoid event
  //propagation between child and its parent:
  public handleClick(event: any): void {
    event.stopPropagation();
  }
}
