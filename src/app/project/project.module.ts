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
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { taskFilterReducer } from './reducers/task-filter.reducer';
import { taskReducer } from './reducers/task.reducer';

const routes = [
  { component: DynamicFormContainerComponent, path: 'dynamic-form' },
  { component: TemplateFormContainerComponent, path: 'template-form/:id' },
  { component: CounterContainerComponent, path: 'counter' },
  { component: DashboardComponent, path: '' },
];

@NgModule({
  declarations: [DashboardComponent, EnterTaskComponent, TaskComponent,
    TaskListComponent, ProjectComponent, TemplateFormComponent, DynamicFormComponent,
    DynamicFormQuestionComponent, DynamicFormContainerComponent, TemplateFormContainerComponent,
    CounterComponent, CounterContainerComponent],
  imports: [SharedModule, RouterModule.forChild(routes),
    StoreModule.provideStore({ counter: counterReducer, task: taskReducer, taskFilter: taskFilterReducer },
      {
        counter: 0, task: [
          {
            done: true,
            title: 'Task 1',
          },
          {
            done: false,
            title: 'Task 2',
          },
        ],
      }),
  ],

})
export class ProjectModule { }
