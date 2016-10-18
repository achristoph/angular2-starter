import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../../core/services/constant';
import {Observable} from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'task-stats',
  templateUrl: 'task-stats.component.html',
})
export class TaskStatsComponent {
  @Input() all: Observable<Task[]>;
  @Input() done: Task[];
  @Input() open: Task[];

  constructor() {

  }
}
