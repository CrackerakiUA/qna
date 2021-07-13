import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { CreateComponent } from './create.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: CreateComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		CreateComponent
	],
	providers: []
	
})

export class CreateModule { }
