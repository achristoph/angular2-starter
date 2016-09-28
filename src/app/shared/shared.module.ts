import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TextFieldComponent } from './components/textfield/textfield.component';

@NgModule({
  declarations: [CheckboxComponent, ToggleComponent, TextFieldComponent],
  exports: [CommonModule, CheckboxComponent, ToggleComponent, TextFieldComponent, FormsModule],
  imports: [CommonModule, FormsModule], // the components need common directives
})
export class SharedModule { }
