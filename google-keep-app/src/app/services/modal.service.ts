import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NoteModel } from '../shared/models/note.component.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  // note data state:
  public noteModalData: NoteModel = {
    title: '',
    text: '',
    selectedColor: '',
    backgroundImage: '',
    uploadedImage: '',
    lastUpdate: '',
    isPinned: false,
  };

  private noteModal$ = new BehaviorSubject<NoteModel>({
    title: '',
    text: '',
    selectedColor: '',
    backgroundImage: '',
    uploadedImage: '',
    lastUpdate: '',
    isPinned: false,
  });

  public modalChanged: boolean = false;
  public activeNoteModal: boolean = false;

  public setModal(latestValue: NoteModel) {
    console.log('latest val obs:', latestValue);

    // check if modal data got some changes to avoid useless API request:
    this.modalChanged =
      JSON.stringify(this.noteModalData) !== JSON.stringify(latestValue) &&
      this.noteModalData.title !== '';

    return this.noteModal$.next(latestValue);
  }

  public getModal(): Observable<NoteModel> {
    return this.noteModal$;
  }

  public resetModal(): void {
    this.noteModalData = {
      title: '',
      text: '',
      selectedColor: '',
      backgroundImage: '',
      uploadedImage: '',
      lastUpdate: new Date(),
      isPinned: false,
    };
  }
}
