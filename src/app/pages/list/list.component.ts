import { Component } from '@angular/core';
import { QuestionService } from 'src/app/services';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent{
	constructor(public qs: QuestionService) {}
}
