import {
  Component,
  Input,
  Output,
  EventEmitter} from '@angular/core';

@Component({
  selector: 'cmp-textfield',
  template: require('./textfield.component.html'),
})
export class TextFieldComponent {
  @Input() label: string;
  @Input() val: string = '';
  @Output() valChange: EventEmitter<{}> = new EventEmitter();

  onKeyUp(value: string): void {
    this.val = value;
    this.valChange.emit(value);
  }
}
