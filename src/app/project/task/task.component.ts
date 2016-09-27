import {Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'task',
  styleUrls: ['./task.component.css'],
  templateUrl: './task.component.html',
})

export class TaskComponent {
  @Input() title: string;
  @Input() done: boolean;
  // We are using two event emitters for task updates and deletion
  @Output() taskUpdated: EventEmitter<{}> = new EventEmitter();
  @Output() taskDeleted: EventEmitter<{}> = new EventEmitter();

  // We use this function to update the checked state of our task
  markDone(checked: boolean): void {
    this.done = checked;
    this.taskUpdated.emit({
      done: this.done,
      title: this.title,
    });
  }

  // If we want to delete this task we just emit an event and let the parent component deal with the rest
  deleteTask(): void {
    this.taskDeleted.emit();
  }
}
