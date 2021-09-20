export default class Stack {
	constructor() {
		this._n = 0;
		this._itens = {};		
	}
	
	push(elt) {
		this._itens[this._n] = elt;
		this._n++;
	}
	
	pop() {
		if (this.isEmpty()) return undefined;
		
		this._n--;
		let item = this._itens[this._n];
		delete this._itens[this._n];		
		
		return item;
	}
	
	peek() {
		if (this.isEmpty()) return undefined;
		
		return this._itens[this._n - 1];
	}
	
	isEmpty() {
		return this._n === 0;
	}
	
	size() {
		return this._n;
	}
	
	clear() {
		this._n = 0;
		this._itens = {};
	}	
}