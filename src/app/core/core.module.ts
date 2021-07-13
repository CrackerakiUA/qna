import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArrPipe } from './pipes/arr.pipe';
import { UpperPipe } from './pipes/upper.pipe';

@NgModule({
	declarations: [
		ArrPipe,
		UpperPipe
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		CommonModule,
		FormsModule,
		UpperPipe,
		ArrPipe
	]
})
export class CoreModule { }
