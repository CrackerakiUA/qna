import { Component, Input, OnInit } from '@angular/core';
import { Question, Answer, default_question, default_answer } from 'src/app/core';
import { QuestionService } from 'src/app/services';

@Component({
	selector: 'single',
	templateUrl: './single.component.html',
	styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
	@Input() question: Question = default_question;
	public answer: Answer = default_answer;
	constructor(public qs: QuestionService) {}
	ngOnInit(){
		this.answer = this.qs.getAnswer(this.question.id);
	}
}
