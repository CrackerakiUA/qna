import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from './store.service';
import { Question, default_question } from 'src/app/core';
@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	readonly default_question = default_question;
	public questions: Question[] = this.store.get('questions') || [];
	constructor(private store: StoreService, private router: Router){}
	create(question: Question){
		question.id = Date.now();
		// this is sorting by newest, there is no case to sort questions in this array
		this.questions.unshift(question);
		this.store.set('questions', this.questions);
		this.router.navigate(['/']);
	}
	public get(question_id: number):Question {
		for (let i = this.questions.length-1; i >= 0; i--){
			if(this.questions[i].id === question_id){
				return JSON.parse(JSON.stringify(this.questions[i]));
			}
		}
		return this.default_question;
	}
	update(question: Question){
		for (let i = this.questions.length-1; i >= 0; i--){
			if(this.questions[i].id === question.id){
				this.questions[i] = question;
			}
		}
		this.store.set('questions', this.questions);
		this.router.navigate(['/']);
	}
	delete(question: Question){
		for (let i = this.questions.length-1; i >= 0; i--){
			if(this.questions[i].id === question.id){
				this.questions.splice(i, 1);
			}
		}
		// replace this with back-end api call to delete
		this.store.set('questions', this.questions);
	}
}
