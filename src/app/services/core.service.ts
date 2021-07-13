import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CoreService {
	constructor() { }
	private _afterWhile:any = {}; 
	public afterWhile(id: number, cb: any, time=1000){
		if(typeof cb != 'function' || typeof time != 'number') return;
		clearTimeout(this._afterWhile[id]);
		this._afterWhile[id] = setTimeout(cb, time);
	};
}
