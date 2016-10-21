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
  toast: any;

  constructor(private service: WikipediaService) {
    this.service.search(this.term$)
      .subscribe((results: any) => {
        this.items = results;
      });
  }

  showToast(toast: any) {
    this.toast = toast;
    let data = {
      message: 'Search Wikipedia',
      timeout: 3000,
    };
    toast.MaterialSnackbar.showSnackbar(data);
  }

  resetResultDisplay() {
    this.items = undefined;
  }
}
