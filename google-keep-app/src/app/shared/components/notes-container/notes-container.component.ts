import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  constructor(public notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((result) => {
      this.notesService.notesData = result;
    });
  }
}
