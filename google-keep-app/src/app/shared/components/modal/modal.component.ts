import { Component } from '@angular/core';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/modal.service';
import { NotesService } from 'src/app/services/notes.service';
import { colorsOptions } from './note.data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  public isColorMenuOpen: boolean = false;
  public colors: string[] = colorsOptions;
  public brushIcon = faBrush;

  public title = document.getElementsByTagName('h2');

  constructor(
    public notesService: NotesService,
    public modalService: ModalService
  ) {}

  ngOnInit() {
    // this observer by subscribing will be notified when any change to the observable state will occurs:
    this.modalService.getModal().subscribe((data) => {
      this.modalService.noteModalData = data;
    });
  }

  public onOpenColorsMenu(): void {
    this.isColorMenuOpen = !this.isColorMenuOpen;
  }

  public onSetNoteColor(selectedColor: string): void {
    this.modalService.setModal({
      ...this.modalService.noteModalData,
      selectedColor: selectedColor,
    });
  }

  public onSetNoteTitle(newTitle: string): void {
    this.modalService.setModal({
      ...this.modalService.noteModalData,
      title: newTitle,
    });
  }

  public onSetNoteText(newText: string): void {
    this.modalService.setModal({
      ...this.modalService.noteModalData,
      text: newText,
    });
  }
}
