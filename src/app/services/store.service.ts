import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StoreService {
	constructor(){}
	set(hold, value){
		try { localStorage.setItem('temp_storage_'+hold, JSON.stringify(value)); }
		catch(e){}
	}
	get(hold, cb:any=()=>{}, errcb:any=()=>{}){
		let doc = localStorage.getItem('temp_storage_'+hold);
		cb(doc&&JSON.parse(doc)||null);
	}
	remove(hold, cb:any=()=>{}, errcb:any=()=>{}){
		localStorage.removeItem('temp_storage_'+hold);
	}
	clear(cb:any=()=>{}, errcb:any=()=>{}){
		localStorage.clear();
	}
}
