import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-drawer',
  styles: [require('./drawer.component.css')],
  template: require('./drawer.component.html'),
})

export class DrawerComponent implements OnInit {
  logo: string = require('images/angular.png');

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

}
