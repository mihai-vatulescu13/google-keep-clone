import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  public onOpenModal(): void {}

  public onCloseModal(): void {}
}
