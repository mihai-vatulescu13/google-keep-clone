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
  };

  private _noteModal = new BehaviorSubject<NoteModel>({
    title: '',
    text: '',
    selectedColor: '',
  });

  private _noteModal$ = this._noteModal.asObservable();

  public modalChanged: boolean = false;

  public setModal(latestValue: NoteModel) {
    // check if modal data got some changes to avoid useless API request:
    this.modalChanged =
      JSON.stringify(this.noteModalData) !== JSON.stringify(latestValue) &&
      this.noteModalData.title !== '';

    return this._noteModal.next(latestValue);
  }

  public getModal(): Observable<NoteModel> {
    return this._noteModal$;
  }

  public resetModal(): void {
    this.noteModalData = {
      title: '',
      text: '',
      selectedColor: '',
    };
  }
}
