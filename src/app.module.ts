import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CoreModule } from './app/core/core.module';
import { ProjectModule } from './app/project/project.module';
import { CustomHttp } from './app/core/services/custom-http';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './app/project/reducers/counter';
import './public/css/styles.css';
import 'material-design-lite/material.min';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, ProjectModule, routing,
    StoreModule.provideStore({ counter: counterReducer }, { counter: 0 })],
  providers: [
    {
      deps: [XHRBackend, RequestOptions],
      provide: Http, useFactory:
      (backend: XHRBackend, defaultOptions: RequestOptions) => new CustomHttp(backend, defaultOptions),
    },
    appRoutingProviders,
  ],
})
export class AppModule { }
