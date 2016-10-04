import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) { }

  searchRaw(term: string): Observable<string> {
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
      .map(response => response.json()[1]);
  }

  search(terms: Observable<string>, debounceMs = 400): Observable<string> {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchRaw(term));
  }

}
