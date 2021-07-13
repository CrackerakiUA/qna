export interface Question {
	id: number;
	text: string;
	answers: string[];
	category: string; // not used word type as in many databases that name is hold for other purposes
}

export interface Answer {
	id: number;
	text: string;
	question_id: number;
}

export const default_question = {
	id: 0,
	text: '',
	answers: [],
	category: ''
}

export const default_answer = {
	question_id: 0,
	id: 0,
	text: '',
	answer: ''
}

export const Categories = [
	'single',
	'multiple',
	'open'
]