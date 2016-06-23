import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  directives: [HeaderComponent, DrawerComponent],
  moduleId: module.id,
  selector: 'dashboard',
  styles: [require('./dashboard.component.css')],
  template: require('./dashboard.component.html'),
})

export class DashboardComponent implements OnInit {
  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

}
