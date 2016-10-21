import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from './services/person.service';
// import { PersonWithLogService } from './services/person-with-log.service';
import { QuestionService } from './services/question.service';
import { WikipediaService } from './services/wikipedia.service';
import { LogDebugger } from './services/log-debugger';
import { Constant } from './services/constant';
import { HeaderComponent } from './components/header/header.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { MDL } from './directives/mdl.directive';

@NgModule({
  declarations: [HeaderComponent, DrawerComponent, HighlightDirective, MDL],
  exports: [HeaderComponent, DrawerComponent, HttpModule, HighlightDirective, MDL],
  imports: [CommonModule, JsonpModule, RouterModule],
  providers: [Constant,
    { provide: PersonService, useClass: PersonService },
    {
      provide: LogDebugger, useFactory: () => new LogDebugger(true),
    },
    {
      provide: 'peopleUrl',
      useValue: 'people.json',
    },
    QuestionService,
    WikipediaService,
  ],
})
export class CoreModule {
}
