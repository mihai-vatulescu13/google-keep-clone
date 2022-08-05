import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {
  public showNoteText: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public onOpenNoteText(): void {
    this.showNoteText = true;
  }

  public onCloseNoteText(): void {
    this.showNoteText = false;
  }
}
