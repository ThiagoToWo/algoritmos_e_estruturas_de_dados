class Pair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
}

export default class HashMap {
	constructor() {
		this._table = [];
		this._n = 0;
	}
	
	put(key, value) {
		const hash = this.toHashCode(key);
		
		if (key == null || value == null) return false;
		
		this._table[hash] = new Pair(key, value);
		
		return true;
	}
	
	get(key) {
		const hash = this.toHashCode(key);
		
		return this._table[hash].value;
	}
	
	remove(key) {
		const hash = this.toHashCode(key);
		
		if (this._table[hash] == null) return false;
		
		delete this._table[hash];
		
		return true;
	}
	
	toHashCode(key) {
		const p = 53;
		const M = 1e9 + 9;
		let pow = 1;
		let hash = 0;
		
		for (let i = 0; i < key.length; i++) {
			hash = (hash + (key.charCodeAt(i) + 1) * pow) % M;
			pow = (pow * p) % M;
		}
		
		return hash;
	}
}