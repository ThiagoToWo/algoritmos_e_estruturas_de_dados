function defaultToString(elmt) {
	if (elmt === null) {
		return 'NULL';
	} else if (elmt === undefined) {
		return 'UNDEFINED';
	} else if (typeof elmt === 'string' || elmt instanceof String) {
		return elmt;
	} else if (typeof elmt === 'boolean' || elmt instanceof Boolean) {
		return String(elmt);
	}
	
	return elmt.toString();
}

class Pair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
}

export default class HashMap {
	constructor(toStringFunction = defaultToString) {
		this._table = [];
		this._n = 0;
		this._toStr = toStringFunction;
	}
	
	put(key, value) {
		const hash = this.toHashCode(key);
		
		if (key == null || value == null) return false;
		
		this._table[hash] = new Pair(key, value);
		this._n++;
		
		return true;
	}
	
	get(key) {
		if (key == null) return undefined;
		
		const hash = this.toHashCode(key);
		
		return this._table[hash].value;
	}
	
	remove(key) {
		const hash = this.toHashCode(key);
		
		if (this._table[hash] == null) return false;
		
		delete this._table[hash];
		this._n--;
		
		return true;
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