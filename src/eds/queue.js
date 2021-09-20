export default class Queue {
	constructor() {
		this._tail = 0;
		this._nose = 0;
		this._itens = {};
	}
	
	enqueue(elt) {
		this._itens[this._tail] = elt;
		this._tail++;
	}
	
	dequeue() {
		if (this.isEmpty()) return undefined;
		
		let item = this._itens[this._nose];
		delete this._itens[this._nose];
		this._nose++;
		
		return item;
	}
	
	peek() {
		if (this.isEmpty()) return undefined;
		
		return this._itens[this._nose];
	}
	
	isEmpty() {
		return this.size() === 0;
	}
	
	size() {
		return this._tail - this._nose;
	}
	
	clear() {
		this._tail = 0;
		this._nose = 0;
		this._itens = {};
	}	
}