import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { EditComponent } from './edit.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: EditComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		EditComponent
	],
	providers: []
	
})

export class EditModule { }
