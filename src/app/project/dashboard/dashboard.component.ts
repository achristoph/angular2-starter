import { Component } from '@angular/core';
import { Task, Project } from '../../core/services/constant';
import { PersonService } from '../../core/services/person.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent {
  project: Project;

  constructor(private person: PersonService, private store: Store<any>) {
    person.getPeople().subscribe((data) => console.log(data));
    this.project = {
      description: 'Initial release of the project',
      tasks: [],
      title: 'Project Alpha',
    };
    store.select('task').subscribe((tasks: Task[]) => {
      this.project.tasks = tasks;
    });
  }

  updateProject(projectData: any): void {
    Object.assign(this.project, projectData);
    console.log(this.project);
  }
}
