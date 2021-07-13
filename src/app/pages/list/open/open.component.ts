import { Component, Input, OnInit } from '@angular/core';
import { Question, Answer, default_question, default_answer } from 'src/app/core';
import { QuestionService } from 'src/app/services';

@Component({
	selector: 'open',
	templateUrl: './open.component.html',
	styleUrls: ['./open.component.scss']
})
export class OpenComponent implements OnInit {
	@Input() question: Question = default_question;
	public answer: Answer = default_answer;
	constructor(public qs: QuestionService) {}
	ngOnInit(){
		this.answer = this.qs.getAnswer(this.question.id);
	}
}
