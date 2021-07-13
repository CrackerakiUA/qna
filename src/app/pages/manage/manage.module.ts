import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { ManageComponent } from './manage.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: ManageComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		ManageComponent
	],
	providers: []
	
})

export class ManageModule { }
