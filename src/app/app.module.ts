import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
	path: '',
	loadChildren: () => import('./pages/manage/manage.module').then(m => m.ManageModule)
}, {
	path: 'create',
	loadChildren: () => import('./pages/create/create.module').then(m => m.CreateModule)
}, {
	path: 'edit/:_id',
	loadChildren: () => import('./pages/edit/edit.module').then(m => m.EditModule)
}, {
	path: 'list',
	loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)
}]

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
			preloadingStrategy: PreloadAllModules
		}),
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
