import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpperPipe } from './pipes/upper.pipe';

@NgModule({
	declarations: [
		UpperPipe
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		CommonModule,
		FormsModule,
		UpperPipe
	]
})
export class CoreModule { }
