import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app/app.component';
import { DashboardComponent }  from './app/components/dashboard/dashboard.component';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, routing],
  providers: [
    appRoutingProviders,
  ],
})
export class AppModule { }
