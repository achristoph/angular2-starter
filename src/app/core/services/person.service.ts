import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface Person {
  Id: number;
  ParentTeam: string;
  Name: string;
  Type: string;
  selected: boolean;
}

@Injectable()
export class PersonService {

  constructor(private http: Http, @Inject('peopleUrl') private peopleUrl: string) {
    console.log(this.peopleUrl);
  }

  getPeople(): Observable<any> {
    return this.http.get(this.peopleUrl)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getConcatData(): Observable<any> {
    return Observable.concat(this.getUser(), this.getAccount());
  }

  getCombinedData(): Observable<any> {
    return Observable.forkJoin(this.getUser(), this.getAccount());
  }

  getUser(): Observable<any> {
    return this.http.get('http://localhost:3000/user')
      .map((res: any) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  getAccount(): Observable<any> {
    return this.http.get('http://localhost:3000/account')
      .map((res: any) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  handleError(error: any): any {
    let errMsg: string = error.message || 'Server error';
    console.log(errMsg);
    return Observable.empty();
    // return Observable.throw(errMsg);
  }
}
