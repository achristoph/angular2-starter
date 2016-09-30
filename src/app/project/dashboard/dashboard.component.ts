import { Component, OnInit } from '@angular/core';
import { IProject } from '../../core/services/constant';
import { PersonService } from '../../core/services/person.service';
import { QuestionService } from '../../core/services/question.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  project: IProject;
  questions: any[];

  constructor(private person: PersonService, service: QuestionService) {
    this.questions = service.getQuestions();
    person.getPeople().subscribe((data) => console.log(data));
  }

  ngOnInit(): void {

    this.project = {
      description: 'Initial release of the project',
      tasks: [
        {
          done: true,
          title: 'Task 1',
        },
        {
          done: false,
          title: 'Task 2',
        },
      ],
      title: 'Project Alpha',
    };
  }

  updateProject(projectData: any): void {
    Object.assign(this.project, projectData);
    console.log(this.project);
  }
}
