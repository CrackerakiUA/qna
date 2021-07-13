import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StoreService {
	constructor(){}
	set(hold: string, value: any){
		try { localStorage.setItem('temp_storage_'+hold, JSON.stringify(value)); }
		catch(e){}
	}
	get(hold: string){
		let doc = localStorage.getItem('temp_storage_'+hold);
		return doc && JSON.parse(doc) || null;
	}
	remove(hold: string){
		localStorage.removeItem('temp_storage_'+hold);
	}
}
