import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  //for the inputs from create modal:
  private modal$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  public onOpenModal(): void {
    this.modal$.next(true);
  }

  public get modalData(): BehaviorSubject<boolean> {
    return this.modal$;
  }

  public onCloseModal(): void {
    this.modal$.next(false);
  }
}
