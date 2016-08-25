import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import {Constant} from './services/constant';

@Component({
  directives: [CORE_DIRECTIVES, DrawerComponent, HeaderComponent],
  pipes: [],
  providers: [Constant],
  selector: 'app',
  template: require('./app.component.html'),
})

export class AppComponent {

}
