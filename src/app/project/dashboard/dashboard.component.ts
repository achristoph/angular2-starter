import { Component, OnInit } from '@angular/core';
import { IProject } from '../../core/services/constant';

// import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs/Rx';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  project: IProject;

  constructor() {
    //
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

// var subject = new ReplaySubject(1 /* buffer size */);

// subject.next('a');
// subject.next('b');
// subject.next('c');

// var subscription = subject.subscribe(
//     function (x) {
//         console.log('Next: ' + x.toString());
//     },
//     function (err) {
//         console.log('Error: ' + err);
//     },
//     function () {
//         console.log('Completed');
//     });

// => Next: b
// => Next: c

// subject.next('d');
// => Next: d
