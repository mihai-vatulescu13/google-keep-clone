import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotesService } from './notes.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _searchPayload = new BehaviorSubject<string>('');

  private _searchPayload$ = this._searchPayload.asObservable();

  public setSearchPayload(newPayload: string) {
    return this._searchPayload.next(newPayload);
  }

  public get getSearchPayload(): Observable<string> {
    return this._searchPayload$;
  }

  public searchPayload: string = '';

  //to be continued tomorrow from here:
  constructor(private notesService: NotesService) {}

  public setSearch(newPayload: string): void {
    console.log('payload search:', newPayload);
  }
}
