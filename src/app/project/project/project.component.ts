import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Task, AppState } from '../../core/services/constant';

// This component represents a project and displays project details
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'project',
  styleUrls: ['./project.component.css'],
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() tasks: Observable<Task[]>;
  @Output() projectUpdated: EventEmitter<{}> = new EventEmitter();
  model;
  percentDone;

  constructor(private store: Store<AppState>) {
    const taskModel = () => {
      return (state) => state
        .map(([tasks, filter]) => {
          return {
            done: tasks.filter((t: Task) => t.done).length,
            open: tasks.filter((t: Task) => !t.done).length,
            tasks: tasks.filter(filter.fn),
            total: tasks.length,
          };
        });
    };

    const getTasks = () => {
      return (state) => state
        .map(s => s.task)
        .distinctUntilChanged();
    };

    const percentDone = () => {
      return (state) => state
        .let(getTasks())
        .map(tasks => {
          const totalDone = tasks.filter((t: Task) => t.done).length;
          const total = tasks.length;
          return total > 0 ? (totalDone / total) : 0;
        });
    };

    this.model = Observable.combineLatest(
      this.store.select('task'),
      this.store.select('taskFilter')).let(taskModel());

    this.percentDone = store.let(percentDone());
  }

  // This function emit an event if any of the project details have been changes within the component
  onProjectUpdated(): void {
    this.projectUpdated.emit({
      description: this.description,
      tasks: this.tasks,
      title: this.title,
    });
  }

  // This function should be called if the task list of the project was updated
  updateTasks(tasks: Observable<Task[]>): void {
    this.tasks = tasks;
    this.onProjectUpdated();
  }
}
