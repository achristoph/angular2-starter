import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'task-list',
  styles: [require('./task-list.component.css')],
  template: require('./task-list.component.html'),
})
export class TaskListComponent {
  @Input() tasks: any[];
  // Event emitter for emitting an event once the task list has been changed
  @Output() tasksUpdated: EventEmitter<{}> = new EventEmitter();
  taskFilterList: string[];
  selectedTaskFilter: string;

  constructor() {
    this.taskFilterList = ['all', 'open', 'done'];
    this.selectedTaskFilter = 'all';
  }

  // Get a filtered list of the task list that depends on our selected filter
  getFilteredTasks(): Object[] {
    return this.tasks.filter((task: any) => {
      if (this.selectedTaskFilter === 'all') {
        return true;
      } else if (this.selectedTaskFilter === 'open') {
        return !task.done;
      } else {
        return task.done;
      }
    });
  }

  // We use the reference of the old task to updated one specific item within the task list.
  onTaskUpdated(task: any, taskData: any): void {
    const tasks: any[] = this.tasks.slice();
    tasks.splice(this.tasks.indexOf(task), 1, taskData);
    this.tasksUpdated.emit(tasks);
  }

  // Using the reference of a task, this function will remove it from the tasks list and send an update
  onTaskDeleted(task: any): void {
    const tasks: any[] = this.tasks.slice();
    tasks.splice(this.tasks.indexOf(task), 1);
    this.tasksUpdated.emit(tasks);
  }

  // Function to add a new task
  addTask(title: string): void {
    const tasks: any[] = this.tasks.slice();
    tasks.splice(this.tasks.length, 0, {
      title,
      done: false,
    });
    this.tasksUpdated.emit(tasks);
  }
}
