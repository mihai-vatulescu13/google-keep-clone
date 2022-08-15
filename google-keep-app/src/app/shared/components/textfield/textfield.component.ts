import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
})
export class TextfieldComponent {
  @Input() inputType: string;
  @Input() placeHolder: string;
  @Output() public textEmitter = new EventEmitter();

  public onTextChange(textPayload: any) {
    this.textEmitter.emit(textPayload.target.value);
  }
}
