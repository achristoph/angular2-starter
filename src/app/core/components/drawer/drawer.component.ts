import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  styles: ['./drawer.component.css'],
  template: './drawer.component.html',
})

export class DrawerComponent implements OnInit {
  logo: string = 'images/angular.png';

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

}
