import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EnterTaskComponent } from './enter-task/enter-task.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectComponent } from './project/project.component';
import { SharedModule } from '../shared/shared.module';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateFormContainerComponent } from './template-form-container/template-form-container.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormContainerComponent } from './dynamic-form-container/dynamic-form-container.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { CounterContainerComponent } from './counter-container/counter-container.component';
import { CounterComponent } from './counter/counter.component';
import { TaskStatsComponent } from './task-stats/task-stats.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { taskFilterReducer } from './reducers/task-filter.reducer';
import { projectReducer } from './reducers/project.reducer';
import { taskReducer } from './reducers/task.reducer';
import { Task, Project } from '../core/services/constant';

const routes = [
  { component: DynamicFormContainerComponent, path: 'dynamic-form' },
  { component: TemplateFormContainerComponent, path: 'template-form/:id' },
  { component: CounterContainerComponent, path: 'counter' },
  { component: DashboardComponent, path: '' },
];

let initialTasks: Task[] = [
  {
    done: true,
    id: 0,
    title: 'Task 1',
  },
  {
    done: false,
    id: 1,
    title: 'Task 2',
  },
];

let initialProject: Project = {
  description: 'Initial release of the project',
  tasks: initialTasks,
  title: 'Project Alpha',
};

@NgModule({
  declarations: [DashboardComponent, EnterTaskComponent, TaskComponent,
    TaskListComponent, ProjectComponent, TemplateFormComponent, DynamicFormComponent,
    DynamicFormQuestionComponent, DynamicFormContainerComponent, TemplateFormContainerComponent,
    CounterComponent, CounterContainerComponent, TaskStatsComponent],
  imports: [SharedModule, RouterModule.forChild(routes),
    StoreModule.provideStore({
      counter: counterReducer, project: projectReducer, task: taskReducer,
      taskFilter: taskFilterReducer,
    },
      {
        counter: 0,
        project: initialProject,
        task: initialTasks,
      }
    ),
  ],
})
export class ProjectModule { }
