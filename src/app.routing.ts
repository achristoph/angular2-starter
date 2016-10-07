import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { loadChildren: 'app/project/project.module', path: '' },
];

export const appRoutingProviders: any[] = [];

export const routing: any = RouterModule.forRoot(appRoutes);
