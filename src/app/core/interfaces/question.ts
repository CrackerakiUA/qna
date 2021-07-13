export interface Question {
	id: number;
	text: string;
	answers: string[];
	category: string; // not used word type as in many databases that name is hold for other purposes
}

export const default_question = {
	id: 0,
	text: '',
	answers: [],
	category: ''
}

export const Categories = [
	'single',
	'multiple',
	'open'
]