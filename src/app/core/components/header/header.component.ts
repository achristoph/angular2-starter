import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { WikipediaService } from '../../services/wikipedia.service';
import { Subject } from 'rxjs/Subject';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  styles: [require('./header.component.css')],
  template: require('./header.component.html'),
})

export class HeaderComponent {
  items: string[];
  term$ = new Subject<string>();

  constructor(private service: WikipediaService) {
    this.term$.subscribe(term => this.search(term));
  }

  search(term: string) {
    this.service.search(term)
      .subscribe(results => {
        this.items = results;
        console.log(results);
      });
  }

}
