import { Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Requesting from CustomHTTP......');
    debugger;
    return super.request(url, options).catch((err, caught) => {
      if (err.status === 401
        // && !_.endsWith(err.url, 'api/auth/login')
      ) {
        // this._router.navigate(['/login']);
        return Observable.empty();
      } else {
        return Observable.throw(err);
      }
    });
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Invoking Get from CustomHTTP......');
    return super.get(url, options).catch((err, caught) => {
      if (err.status === 401
        // && !_.endsWith(err.url, 'api/auth/login')
      ) {
        // this._router.navigate(['/login']);
        return Observable.empty();
      } else {
        return Observable.throw(err);
      }
    });
  }
}
