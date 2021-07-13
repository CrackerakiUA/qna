import { Component } from '@angular/core';
import { QuestionService } from 'src/app/services';
import { Question, Categories } from 'src/app/core';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent {
	readonly categories = Categories
	public question: Question = {
		id: Date.now(),
		text: '',
		answers: [],
		category: this.categories[0]
	};
	public answer: string = '';
	constructor(public qs: QuestionService) {}
}
