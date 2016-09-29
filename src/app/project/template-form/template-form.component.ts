import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-form',
  styleUrls: ['template-form.component.css'],
  templateUrl: 'template-form.component.html',
})
export class TemplateFormComponent implements OnInit {
  ngOnInit() {
    //
  }

  logForm(value: any) {
    console.log(value);
  }
}
