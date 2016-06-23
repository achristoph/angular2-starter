import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CORE_DIRECTIVES} from '@angular/common';
import {Constant} from './services/constant';

@Component({
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  pipes: [],
  providers: [Constant],
  selector: 'app',
  template: require('./app.component.html'),
})

@RouteConfig([
  { component: DashboardComponent, name: 'Dashboard', path: '/' },
])

export class AppComponent {

}
