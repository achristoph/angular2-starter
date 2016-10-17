import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CoreModule } from './app/core/core.module';
import { ProjectModule } from './app/project/project.module';
import { CustomHttp } from './app/core/services/custom-http';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import './public/css/styles.css';
import 'material-design-lite/material.min';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, ProjectModule, routing,
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        position: 'right',
        visible: true,
      }),
    }),
    StoreLogMonitorModule,
  ],
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
