import { Component, Input } from '@angular/core';
import { Question, default_question } from 'src/app/core';

@Component({
	selector: 'open',
	templateUrl: './open.component.html',
	styleUrls: ['./open.component.scss']
})
export class OpenComponent {
	@Input() question: Question = default_question;
	constructor() { }
}
