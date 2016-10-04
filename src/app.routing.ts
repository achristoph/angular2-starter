import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './app/project/dashboard/dashboard.component';
import { DynamicFormComponent } from './app/project/dynamic-form/dynamic-form.component';

const appRoutes: Routes = [
  { component: DynamicFormComponent, path: 'dynamic-form' },
  { component: DashboardComponent, path: '' },
];

export const appRoutingProviders: any[] = [

];

export const routing: any = RouterModule.forRoot(appRoutes);
