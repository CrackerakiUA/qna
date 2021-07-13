import { Component } from '@angular/core';
import { QuestionService } from 'src/app/services';

@Component({
	selector: 'app-manage',
	templateUrl: './manage.component.html',
	styleUrls: ['./manage.component.scss']
})
export class ManageComponent{
	constructor(public qs: QuestionService) {}
}
