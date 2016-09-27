import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from './services/person.service';
import { Constant } from './services/constant';
import { HeaderComponent } from './components/header/header.component';
import { DrawerComponent } from './components/drawer/drawer.component';

@NgModule({
  declarations: [HeaderComponent, DrawerComponent],
  exports: [HeaderComponent, DrawerComponent],
  imports: [CommonModule],
  providers: [PersonService, Constant],
})
export class CoreModule {
}
