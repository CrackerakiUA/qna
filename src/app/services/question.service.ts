import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from './store.service';
import { Question, default_question, default_answer, Answer } from 'src/app/core';
@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	readonly default_question = default_question;
	readonly default_answer = default_answer;
	public questions: Question[] = this.store.get('questions') || [];
	public answered: Answer[] = this.store.get('answered') || [];
	constructor(private store: StoreService, private router: Router){}
	create(question: Question){
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
	public getAnswer(question_id: number):Answer {
		for (let i = this.answered.length-1; i >= 0; i--){
			if(this.answered[i].question_id === question_id){
				return this.answered[i];
			}
		}
		return JSON.parse(JSON.stringify(this.default_answer));
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
	public now = new Date().getTime();
	refresh(){
		this.now = new Date().getTime();
	}
	answer(question: Question, answer: Answer){
		console.log(question);
		console.log(answer);
		if(!answer.id) answer.id = new Date().getTime();
		
		this.store.set('answered', this.answered);
		this.refresh();
	}
}
