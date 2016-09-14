import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs/Rx';
@Component({
  directives: [],
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

var subject = new ReplaySubject(1 /* buffer size */);

subject.next('a');
subject.next('b');
subject.next('c');

var subscription = subject.subscribe(
    function (x) {
        console.log('Next: ' + x.toString());
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

// => Next: b
// => Next: c

subject.next('d');
// => Next: d