import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services';
import { Question, Categories } from 'src/app/core';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent {
	readonly categories = Categories
	public question: Question = this.qs.get(Number(this.router.url.replace('/edit/', '')));
	public answer: string = '';
	constructor(public qs: QuestionService, private router: Router) {
		if(!this.question.id) this.router.navigate(['/']);
	}
}
