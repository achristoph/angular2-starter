import { Component } from '@angular/core';
import { QuestionService } from '../../core/services/question.service';

@Component({
  selector: 'dynamic-form-container',
  styleUrls: ['dynamic-form-container.css'],
  templateUrl: 'dynamic-form-container.html',
})
export class DynamicFormContainerComponent {

  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

}
