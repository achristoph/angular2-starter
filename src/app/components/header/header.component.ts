import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  styles: [require('./header.component.css')],
  template: require('./header.component.html'),
})

export class HeaderComponent implements OnInit {
  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

}
