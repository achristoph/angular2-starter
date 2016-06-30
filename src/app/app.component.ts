import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {CORE_DIRECTIVES} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import {Constant} from './services/constant';

@Component({
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, DrawerComponent, HeaderComponent],
  pipes: [],
  providers: [Constant],
  selector: 'app',
  template: require('./app.component.html'),
})

@RouteConfig([
  { component: DashboardComponent, name: 'Dashboard', path: '/' },
  { path: '/**', redirectTo: ['Dashboard'] },
])

export class AppComponent {

}
