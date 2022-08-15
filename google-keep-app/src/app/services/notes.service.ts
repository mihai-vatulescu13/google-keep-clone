import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NoteModel } from '../shared/models/note.component.model';
import { NOTES_URL } from './urls.data';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  public notesData: Array<NoteModel>;

  //in this service data will be received from the API:
  constructor(private http: HttpClient) {}

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

  //get all notes:
  public getNotes() {
    return this.http.get<NoteModel[]>(NOTES_URL);
  }

  // create a note:
  public addNote(data: NoteModel) {
    return this.http
      .post<NoteModel>(NOTES_URL, data)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public updateNote(selectedNote: NoteModel) {
    return this.http.put<NoteModel>(
      NOTES_URL + '/' + selectedNote.id,
      selectedNote
    );
  }
}
