import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from './services/person.service';
import { PersonWithLogService } from './services/person-with-log.service';
import { LogDebugger } from './services/log-debugger';
import { Constant } from './services/constant';
import { HeaderComponent } from './components/header/header.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [HeaderComponent, DrawerComponent],
  exports: [HeaderComponent, DrawerComponent, HttpModule],
  imports: [CommonModule],
  providers: [Constant, HttpModule,
    { provide: PersonService, useClass: PersonWithLogService},
    {
      provide: LogDebugger, useFactory: () =>  new LogDebugger(true),
    },
    {
      provide: 'peopleUrl',
      useValue: 'people.json',
    },
  ],
})
export class CoreModule {
}
