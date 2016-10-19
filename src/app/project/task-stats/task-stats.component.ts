import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'task-stats',
  templateUrl: 'task-stats.component.html',
})
export class TaskStatsComponent {
  @Input() all: any;
  @Input() done: any;
  @Input() open: any;
  @Input() percentOpen: any;
}
