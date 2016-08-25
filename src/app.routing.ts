import { Routes, RouterModule }   from '@angular/router';
import { DashboardComponent }  from './app/components/dashboard/dashboard.component';

const appRoutes: Routes = [
  { component: DashboardComponent, path: '**' },
];

export const appRoutingProviders: any[] = [

];

export const routing: any = RouterModule.forRoot(appRoutes);