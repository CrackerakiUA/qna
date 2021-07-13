import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: ListComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		ListComponent
	],
	providers: []
	
})

export class ListModule { }
