import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpperPipe } from './pipes/upper.pipe';
import { SplicePipe } from './pipes/splice.pipe';

@NgModule({
	declarations: [
		UpperPipe,
  		SplicePipe
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		CommonModule,
		FormsModule,
		SplicePipe,
		UpperPipe
	]
})
export class CoreModule { }
