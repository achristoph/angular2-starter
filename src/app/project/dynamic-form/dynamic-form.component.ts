import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../core/services/question-base';
import { QuestionControlService } from '../../core/services/question-control.service';

@Component({
  providers: [QuestionControlService],
  selector: 'dynamic-form',
  styleUrls: ['dynamic-form.component.css'],
  templateUrl: 'dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
