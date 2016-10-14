import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'enter-task',
  templateUrl: './enter-task.component.html',
})
export class EnterTaskComponent {

  @Output() taskEntered: any = new EventEmitter();
  title: string = '';

  // This function will fire the taskEntered event emitter and reset the task title input field
  enterTask(titleInput: any): void {
    this.taskEntered.emit(titleInput.val);
    titleInput.val = '';
    this.title = '';
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.enterTask(event.target);
    }
  }

  inputChange(event: any) {
    console.log(event);
  }
}
