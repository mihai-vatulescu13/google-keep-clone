import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { NoteModel } from '../shared/models/note.component.model';
import { NOTES_URL } from './urls.data';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  // define a behaviour subject to handle all notes:
  private notesData$ = new BehaviorSubject<Array<NoteModel>>([]);
  // keep current notes array status:
  public notesData: Array<NoteModel> = [];

  constructor(private http: HttpClient) {}

  public setNotesObservable(newNotes: NoteModel[]): void {
    this.notesData$.next(newNotes);
  }

  public get getNotesObservable() {
    return this.notesData$;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  public getNotes() {
    return this.http.get<NoteModel[]>(NOTES_URL);
  }

  public addNote(data: NoteModel) {
    return this.http
      .post<NoteModel>(NOTES_URL, data)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public updateNote(selectedNote: NoteModel) {
    console.log('selected note to update:', selectedNote);
    return this.http.put<NoteModel>(NOTES_URL + '/' + selectedNote.id, {
      ...selectedNote,
      lastUpdate: new Date(),
    });
  }

  public deleteNote(noteId?: number): Observable<unknown> {
    return this.http
      .delete(NOTES_URL + '/' + noteId)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public setNotesAfterUpdate(newNote: NoteModel): void {
    if (newNote.id) {
      this.notesData[newNote.id - 1] = newNote;
    }
    this.setNotesObservable(this.notesData);
  }

  public setNotesAfterDeletion(noteToDeleteId: number): void {
    this.notesData$.next(
      this.notesData.filter((note) => {
        return note.id !== noteToDeleteId;
      })
    );
  }

  public setNotesAfterSearch(text: string) {
    this.setNotes(
      this.notesData$.value.filter((note) => {
        return note.title
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase());
      })
    );
  }

  public setNotes(notesArr: NoteModel[]): void {
    this.notesData = notesArr;
  }
}
