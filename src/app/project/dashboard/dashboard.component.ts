import { Component } from '@angular/core';
import { Project } from '../../core/services/constant';
import { PersonService } from '../../core/services/person.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent {
  project: Project;
  result;

  constructor(private person: PersonService, private store: Store<any>) {
    // person.getPeople().subscribe((data) => console.log(data));
    this.project = {
      description: 'Initial release of the project',
      tasks: [],
      title: 'Project Alpha',
    };

    this.project.tasks = store.select('task');
  }

  updateProject(projectData: any): void {
    Object.assign(this.project, projectData);
  }

  search(v): void {
    this.person.getCombinedData().subscribe((res) => {
      console.log(res);
      this.result = res;
    });
  }

}
