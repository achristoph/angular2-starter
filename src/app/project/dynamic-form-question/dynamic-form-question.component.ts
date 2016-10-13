import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase }     from '../../core/services/question-base';

@Component({
  selector: 'df-question',
  styleUrls: ['dynamic-form-question.component.css'],
  templateUrl: 'dynamic-form-question.component.html',
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
