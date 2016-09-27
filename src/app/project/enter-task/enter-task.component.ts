import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'enter-task',
  templateUrl: './enter-task.component.html',
})
export class EnterTaskComponent {
  // @ViewChild(CountdownTimerComponent)
  // private timerComponent: CountdownTimerComponent;

  // Event emitter that gets fired once a task is entered.
  @Output() taskEntered: any = new EventEmitter();

  // This function will fire the taskEntered event emitter and reset the task title input field.
  enterTask(titleInput: any): void {

    console.log(titleInput.value);
    this.taskEntered.emit(titleInput.value);
    titleInput.value = '';
    // titleInput.focus();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.enterTask(event.target);
    }
  }

  inputChange(event: any){
    console.log(event);
  }
}
