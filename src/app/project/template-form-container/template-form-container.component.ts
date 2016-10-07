import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'template-form-container',
  styleUrls: ['template-form-container.component.css'],
  templateUrl: 'template-form-container.component.html',
})
export class TemplateFormContainerComponent {
  id: any;
  constructor(private route: ActivatedRoute) {
    this.id = route.params.map((p: any) => p.id);
  }
}
