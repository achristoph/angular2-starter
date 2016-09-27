import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app/app.component';
import { CoreModule } from './app/core/core.module';
import { ProjectModule } from './app/project/project.module';
// import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, ProjectModule], // routing],
  // providers: [
  //   appRoutingProviders,
  // ],
})
export class AppModule { }
