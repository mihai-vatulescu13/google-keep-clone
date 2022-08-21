import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { NoteModel } from '../../models/note.component.model';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent {
  public showNoteText: boolean = false;
  public newNote: NoteModel = {
    title: 'Untitled note',
    text: '',
    selectedColor: '#e8eaed',
    backgroundImage: '',
    uploadedImage: '',
  };

  public noteForm: NoteModel;

  constructor(public notesService: NotesService) {}

  public onOpenNoteText(): void {
    this.showNoteText = true;
  }

  public onCloseNoteText(): void {
    this.showNoteText = false;
    if (this.newNote.text && this.newNote.title) {
      this.notesService
        .addNote(this.newNote)
        .subscribe((res) => this.notesService.notesData.push(res)); //updates notes arr after the succesfully response from the server

      //reset note status:
      this.newNote.title = 'Untitled';
      this.newNote.text = '';
    }
  }

  public getTitle(noteTitle: string): void {
    this.newNote.title = noteTitle;
  }

  public getText(noteText: string): void {
    this.newNote.text = noteText;
  }
}
