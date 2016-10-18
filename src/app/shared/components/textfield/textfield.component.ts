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
  @Input() value: string = '';
  @Output() valueChange: EventEmitter<{}> = new EventEmitter();

  onKeyUp(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}
