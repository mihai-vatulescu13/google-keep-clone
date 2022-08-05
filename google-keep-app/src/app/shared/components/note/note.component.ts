import { Component, Input, OnInit } from '@angular/core';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { NoteModel } from '../../models/note.component.model';
import { colorsOptions } from './note.data';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() noteContent: NoteModel;

  public isColorMenuOpen: boolean = false;
  public colors: string[] = colorsOptions;
  public brushIcon = faBrush;
  public currentNoteColor: string;

  ngOnInit() {
    this.currentNoteColor = this.noteContent.selectedColor;
    console.log(this.currentNoteColor);
  }

  public onOpenColorsMenu(): void {
    this.isColorMenuOpen = !this.isColorMenuOpen;
  }

  public onSetNoteColor(selectedColor: string): void {
    // here we need o call a service method that send the chages to the server:
    console.log('selected color is:', selectedColor);
    this.currentNoteColor = selectedColor;
    console.log('new color:', this.currentNoteColor);
  }
}
