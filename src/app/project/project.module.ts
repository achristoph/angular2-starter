import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EnterTaskComponent } from './enter-task/enter-task.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectComponent } from './project/project.component';
import { SharedModule } from '../shared/shared.module';
import { TemplateFormComponent } from '../project/template-form/template-form.component';
import { DynamicFormComponent } from '../project/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../project/dynamic-form-question/dynamic-form-question.component';

@NgModule({
  declarations: [DashboardComponent, EnterTaskComponent, TaskComponent,
  TaskListComponent, ProjectComponent, TemplateFormComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  exports: [DashboardComponent, EnterTaskComponent, TaskComponent, TaskListComponent, ProjectComponent],
  imports: [SharedModule],
  providers: [],
})
export class ProjectModule { }
