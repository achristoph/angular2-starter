import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SHOW_ALL, SHOW_DONE, SHOW_OPEN, ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../actions';
import { Task, Action, AppState } from '../../core/services/constant';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'task-list',
  styles: [require('./task-list.component.css')],
  template: require('./task-list.component.html'),
})
export class TaskListComponent {
  @Input() tasks: Task[];
  // Event emitter for emitting an event once the task list has been changed
  @Output() tasksUpdated: EventEmitter<{}> = new EventEmitter();
  taskFilterList: string[];
  filter: any;

  constructor(private store: Store<AppState>) {
    this.taskFilterList = [SHOW_ALL, SHOW_DONE, SHOW_OPEN];
    // store.select('taskFilter').subscribe((tf: any) => {
    //   this.filter = tf.fn;
    // });
  }

  // Get a filtered list of the task list that depends on our selected filter
  // getFilteredTasks(): any {
    // return this.tasks.map((tasks: any) => tasks.filter(this.filter));
    // return this.tasks.filter((task: any) => {
    //   if (this.selectedTaskFilter === 'all') {
    //     return true;
    //   } else if (this.selectedTaskFilter === 'open') {
    //     return !task.done;
    //   } else {
    //     return task.done;
    //   }
    // });
  // }

  updateFilter(filter: string) {
    this.store.dispatch(
      { type: filter }
    );
  }

  // We use the reference of the old task to updated one specific item within the task list.
  updateTask(task: any, taskData: any): void {
    let action: Action = { payload: { task, taskData }, type: UPDATE_TASK };
    this.store.dispatch(action);
  }

  // Using the reference of a task, this function will remove it from the tasks list and send an update
  deleteTask(task: any): void {
    let action: Action = { payload: { task }, type: DELETE_TASK };
    this.store.dispatch(action);
  }

  // Function to add a new task
  addTask(title: string): void {
    let action: Action = { payload: { title }, type: ADD_TASK };
    this.store.dispatch(action);
  }
}
