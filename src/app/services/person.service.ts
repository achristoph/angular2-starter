import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IPerson {
  Id: number;
  ParentTeam: string;
  Name: string;
  Type: string;
  selected: boolean;
}

@Injectable()
export class PersonService {

  constructor(private _http: Http) {
  }

  getPeople(): Observable<any> {
    return this._http.get('/people.json')
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  handleError(error: any): any {
    let errMsg: string = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
