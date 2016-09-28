import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit} from '@angular/core';

// This component represents a project and displays project details
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'project',
  styleUrls: ['./project.component.css'],
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() tasks: any[];
  @Output() projectUpdated: EventEmitter<{}> = new EventEmitter();

  ngOnInit(): void { }

  // This function emit an event if any of the project details have been changes within the component
  onProjectUpdated(): void {
    this.projectUpdated.emit({
      description: this.description,
      tasks: this.tasks,
      title: this.title,
    });
  }

  // This function should be called if the task list of the project was updated
  updateTasks(tasks: Object[]): void {
    console.log(tasks);
    this.tasks = tasks;
    this.onProjectUpdated();
  }
}
