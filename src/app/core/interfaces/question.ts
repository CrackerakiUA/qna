export interface Question {
	id: number;
	text: string;
	answers: string[];
	category: string; // not used word type as in many databases that name is hold for other purposes
}

export const Categories = [
	'single',
	'multiple',
	'open'
]