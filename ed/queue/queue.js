export default class Queue {
	constructor() {
		this._tail = 0;
		this._head = 0;
		this._itens = {};
	}
	
	enqueue(elmt) {
		this._itens[this._tail] = elmt;
		this._tail++;
	}
	
	dequeue() {
		if (this.isEmpty()) return undefined;
		
		let item = this._itens[this._head];
		delete this._itens[this._head];
		this._head++;
		
		return item;
	}
	
	peek() {
		if (this.isEmpty()) return undefined;
		
		return this._itens[this._head];
	}
	
	isEmpty() {
		return this.size() === 0;
	}
	
	size() {
		return this._tail - this._head;
	}
	
	clear() {
		this._tail = 0;
		this._head = 0;
		this._itens = {};
	}	
}