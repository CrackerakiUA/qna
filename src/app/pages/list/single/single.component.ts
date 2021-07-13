import { Component, Input } from '@angular/core';
import { Question, default_question } from 'src/app/core';

@Component({
	selector: 'single',
	templateUrl: './single.component.html',
	styleUrls: ['./single.component.scss']
})
export class SingleComponent{
	@Input() question: Question = default_question;
	constructor() { }
}
