import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from './single/single.component';
import { MultipleComponent } from './multiple/multiple.component';
import { OpenComponent } from './open/open.component';

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
		ListComponent,
  SingleComponent,
  MultipleComponent,
  OpenComponent
	],
	providers: []
	
})

export class ListModule { }
