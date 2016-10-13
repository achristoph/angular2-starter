import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../reducers/counter';
import { Observable } from 'rxjs';

interface IAppState {
  counter: number;
}

@Component({
  selector: 'counter',
  template: `
        <button class="mdl-button mdl-js-button mdl-button--raised" (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button class="mdl-button mdl-js-button mdl-button--raised" (click)="decrement()">Decrement</button>
    `,
})
export class CounterComponent {
  counter: Observable<{}>;

  constructor(public store: Store<IAppState>) {
    this.counter = store.select('counter');
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
