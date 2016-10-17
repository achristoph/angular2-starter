import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { LogDebugger } from './log-debugger';

export interface Person {
  Id: number;
  ParentTeam: string;
  Name: string;
  Type: string;
  selected: boolean;
}

@Injectable()
export class PersonWithLogService {

  constructor(private http: Http, private log: LogDebugger, @Inject('peopleUrl') private peopleUrl: string) {
  }

  getPeople(): Observable<any> {
    console.log('Getting People...');

    return this.http.get('people.json')
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  handleError(error: any): any {
    let errMsg: string = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
