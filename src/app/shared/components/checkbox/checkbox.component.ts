import {
  Component,
  Input,
  Output,
  EventEmitter} from '@angular/core';

@Component({
  selector: 'cmp-checkbox',
  styles: [require('./checkbox.component.css')],
  template: require('./checkbox.component.html'),
})
export class CheckboxComponent {
  // An optional label can be set for the checkbox
  @Input() label: string;
  // If the checkbox is checked or unchecked
  @Input() checked: boolean;
  // Event emitter when checked is changed
  // using the convention for two way binding
  // with [(checked)] syntax.
  @Output() checkedChange: EventEmitter<{}> = new EventEmitter();

  // This function will trigger the checked event emitter
  onCheckedChange(): void {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
