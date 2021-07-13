export interface Question {
	id: number;
	text: string;
	answers: string[];
	category: string;
}

export const Categories = [
	'single',
	'multiple',
	'open'
]