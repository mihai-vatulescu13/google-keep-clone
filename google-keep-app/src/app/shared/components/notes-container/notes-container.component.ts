import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
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

  constructor(
    public notesService: NotesService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((result) => {
      this.notesService.notesData = result;
    });
  }

  public onOpenModal(note: NoteModel): void {
    //update the modal using a behaviour subject:
    this.modalService.setModal(note);
    this.activeNoteModal = true;
  }

  public onCloseModal(): void {
    this.activeNoteModal = false;

    //get all data about the note from the observable and send it to the server:
    this.modalService.getModal().subscribe((data) => {
      this.noteModalData = data;
    });

    this.notesService.updateNote(this.noteModalData).subscribe((res) => {
      console.log('note update with success! form modal', res);
      //get all notes to render the updates:
      this.notesService.getNotes().subscribe((result) => {
        this.notesService.notesData = result;
      });
    });
  }

  //keep modal content component active using event bubbling to avoid event
  //propagation between child and its parent:
  public handleClick(event: any): void {
    event.stopPropagation();
  }
}
