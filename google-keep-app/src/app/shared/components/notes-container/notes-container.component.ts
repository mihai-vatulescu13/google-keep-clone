import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { NoteModel } from '../../models/note.component.model';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  public notesData: Array<NoteModel>;
  public mockNote: NoteModel = {
    title: 'mock note',
    text: 'test POST request',
    selectedColor: 'gray-color',
  };

  constructor(public notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((result) => {
      console.log('incoming data from the server:', result);
      this.notesData = result;
    });
  }

  public onCreateNote(): void {
    this.notesService
      .addNote(this.mockNote)
      .subscribe((res) => this.notesData.push(res)); //updates notes arr after the succesfully response from the server
    console.log('note created with success');
  }
}
