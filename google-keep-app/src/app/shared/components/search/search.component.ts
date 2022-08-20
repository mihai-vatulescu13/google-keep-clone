import { Component, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() inputType: string;
  @Input() placeHolder: string;

  constructor(public notesService: NotesService) {}

  public onSearchChange(textPayload: any) {
    this.notesService.searchElem(textPayload.target.value);
  }
}
