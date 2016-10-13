import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EnterTaskComponent } from './enter-task/enter-task.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectComponent } from './project/project.component';
import { SharedModule } from '../shared/shared.module';
import { TemplateFormComponent } from '../project/template-form/template-form.component';
import { TemplateFormContainerComponent } from '../project/template-form-container/template-form-container.component';
import { DynamicFormComponent } from '../project/dynamic-form/dynamic-form.component';
import { DynamicFormContainerComponent } from '../project/dynamic-form-container/dynamic-form-container.component';
import { DynamicFormQuestionComponent } from '../project/dynamic-form-question/dynamic-form-question.component';
import { CounterContainerComponent } from '../project/counter-container/counter-container.component';
import { CounterComponent } from '../project/counter/counter.component';
import { RouterModule } from '@angular/router';

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
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ProjectModule { }
