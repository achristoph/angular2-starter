import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-toggle',
  template: require('./toggle.component.html'),
})
export class ToggleComponent implements OnInit {
  // A list of objects that will be used as button values.
  @Input() buttonList: string;
  // Input and state of which button is selected needs to refer to
  // an object within buttonList
  @Input() selectedButton: string;
  // Event emitter when selectedButton is changed using the
  // convention for two way binding with [(selected-button)]
  // syntax.
  @Output() selectedButtonChange: EventEmitter<{}> = new EventEmitter();

  // Callback within the component lifecycle that will be called
  // after the constructor and inputs have been set.
  ngOnInit(): void {
    if (this.selectedButton === undefined) {
      this.selectedButton = this.buttonList[0];
    }
  }

  // Method to set selected button and trigger event emitter.
  onButtonActivate(button: string): void {
    this.selectedButton = button;
    this.selectedButtonChange.emit(button);
  }
}
