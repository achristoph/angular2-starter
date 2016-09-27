import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import {EnterTaskComponent } from './enter-task/enter-task.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectComponent } from './project/project.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, EnterTaskComponent, TaskComponent, TaskListComponent, ProjectComponent],
  exports: [DashboardComponent, EnterTaskComponent, TaskComponent, TaskListComponent, ProjectComponent],
  imports: [SharedModule],
  providers: [],
})
export class ProjectModule { }
