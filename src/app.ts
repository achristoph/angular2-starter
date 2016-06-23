import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppComponent} from './app/app.component.ts';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {
      useClass: HashLocationStrategy,
    }
  ),
])
  .catch((err: any) => console.error(err));
