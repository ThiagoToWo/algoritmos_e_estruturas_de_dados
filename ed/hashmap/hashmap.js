import LinkedList from '../linkedlist/linkedlist.js';
import {defaultToString, Pair} from '../util.js';

export default class HashMap {
	constructor(toStringFunction = defaultToString) {
		this._table = [];
		this._n = 0;
		this._toStr = toStringFunction;
	}
	
	put(key, value) {		
		if (key == null || value == null) return false;		
		
		const hash = this.toHashCode(key);
		
		if (this._table[hash] == null) this._table[hash] = new LinkedList();
			
	    this._table[hash].push(new Pair(key, value));			
				
		this._n++;
		
		return true;
	}
	
	get(key) {
		if (key == null) return undefined;
		
		const hash = this.toHashCode(key);
		const list = this._table[hash];
				
		if (list == null || list.isEmpty()) return undefined;
		
		let current = list.getHead();
		
		while (current != null) {
			if (current.element.key === key) {
				return current.element.value;
			}
			
			current = current.next;
		}
	}
	
	remove(key) {
		if (key == null) return false;
		
		const hash = this.toHashCode(key);
		const list = this._table[hash];
				
		if (list == null || list.isEmpty()) return false;
		
		let current = list.getHead();
		
		while (current != null) {
			if (current.element.key === key) {
				list.remove(current.element);
				
				if (list.isEmpty()) {
					delete this._table[hash];
				}
				
				this._n--;
				
				return true;
			}
			
			current = current.next;
		}		
	}
	
	size() {
		return this._n;
	}
	
	toHashCode(key) {
		if (typeof key === 'number') return key;
		
		const keyStr = this._toStr(key);
		const p = 53;
		const M = 1e9 + 9;
		let pow = 1;
		let hash = 0;
		
		for (let i = 0; i < keyStr.length; i++) {
			hash = (hash + (keyStr.charCodeAt(i) + 1) * pow) % M;
			pow = (pow * p) % M;
		}
		
		return hash;
	}
}