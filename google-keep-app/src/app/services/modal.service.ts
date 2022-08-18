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

  public setModal(latestValue: NoteModel) {
    return this._noteModal.next(latestValue);
  }

  public getModal(): Observable<NoteModel> {
    return this._noteModal$;
  }
}
