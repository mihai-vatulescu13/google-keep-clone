import { Component, Input } from '@angular/core';
import { NoteModel } from '../../models/note.component.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() noteContent: NoteModel;
}
