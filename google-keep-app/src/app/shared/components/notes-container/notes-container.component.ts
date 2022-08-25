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
    backgroundImage: '',
    uploadedImage: '',
    lastUpdate: new Date(),
    isPinned: false,
  };
  public pinnedNotesExistence: boolean = false;

  constructor(
    public notesService: NotesService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((result) => {
      this.notesService.setNotesObservable(result);
    });

    //update notes list after changes:
    this.notesService.getNotesObservable.subscribe((response) => {
      this.notesService.setNotes(response);

      this.pinnedNotesExistence = response.some((element) => {
        return element.isPinned === true;
      });
    });
  }

  public onOpenModal(note: NoteModel): void {
    this.modalService.setModal(note);
    this.modalService.activeNoteModal = true;
  }

  public onCloseModal(): void {
    this.modalService.activeNoteModal = false;

    //get data about current modal:
    this.modalService.getModal().subscribe((data) => {
      this.noteModalData = data;
    });

    if (this.modalService.modalChanged) {
      this.notesService
        .updateNote(this.noteModalData)
        .subscribe((updatedNote) => {
          //update the notes using the behaviour subject to avoid another request:
          this.notesService.setNotesAfterUpdate(updatedNote);
        });
    }
    this.modalService.resetModal();
  }

  //avoid parent event propagation using this method:
  public handleClick(event: any): void {
    event.stopPropagation();
  }
}
