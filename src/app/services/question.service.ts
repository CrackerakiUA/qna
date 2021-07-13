import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from './store.service';
import { CoreService } from './core.service';
import { Question } from 'src/app/core';
@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	public questions: Question[] = this.store.get('questions') || [];
	constructor(private store: StoreService, private core: CoreService,
		private router: Router){}
	create(question: Question){
		question.id = Date.now();
		this.questions.push(question);
		this.store.set('questions', this.questions);
		this.router.navigate(['/']);
	}
	update(question: Question){
		this.core.afterWhile(question.id, ()=>{
			// we suppose that we use back-end and not local store
			// that's why we use afterWhile
			// later to replace with update to back-end, which will use question doc
			this.store.set('questions', this.questions);
		});
	}
	delete(question: Question){
		for (let i = this.questions.length-1; i >= 0; i--){
		    if(this.questions[i].id == question.id){
		    	this.questions.splice(i, 1);
		    }
		}
		// replace this with back-end api call to delete
		this.store.set('questions', this.questions);
	}
}
