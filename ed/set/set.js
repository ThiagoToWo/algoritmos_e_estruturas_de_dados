export default class Set {
	constructor() {
		this._items = {};
		this._n = 0;
	}
	
	add(elmt) {
		if (!this.has(elmt)) {
			this._items[elmt] = elmt;
			this._n++;
			
			return true;
		}
		
		return false;
	}
	
	remove(elmt) {
		if (this.has(elmt)) {
			delete this._items[elmt];
			this._n--;
			
			return true;
		}
		
		return false;
	}
	
	has(elmt) {
		return elmt in this._items;
	}
	
	clear() {
		this._items = {};
	}
	
	size() {
		return this._n;
	}
	
	values() {
		let values = [];
		
		for (let elmt in this._items) {
			if (this._items.hasOwnProperty(elmt)) {
				values.push(elmt);
			}
		}
		
		return values;
	}
	
	union(set) {
		const union = new Set();
		let val = this.values();
		let setVal = set.values();
		
		for (let i in val) {
			union.add(val[i]);
		}
		
		for (let i in setVal) {
			union.add(setVal[i]);
		}
		
		return union;
	}
	
	intersection(set) {
		const inter = new Set();
		let val = this.values();
		let setVal = set.values();
		
		let bgg = val;
		let sll = setVal;
		
		if (setVal.length > val.length) {
			bgg = setVal;
			sll = val;
		}
		
		for (let i in sll) {
			if (bgg.includes(sll[i])) {
				inter.add(sll[i]);
			}
		}
		
		return inter;
	}
	
	difference(set) {
		const diff = new Set();
		let val = this.values();
		
		for (let i in val) {
			if (!set.has(val[i])) {
				diff.add(val[i]);
			}
		}
		
		return diff;
	}
	
	isSubsetOf(set) {
		let val = this.values();
		
		if (this.size() > set.size()) {
			return false;
		}
		
		for (let i in val) {
			if (!set.has(val[i])) {
				return false;
			}
		}
		
		return true;
	}
}