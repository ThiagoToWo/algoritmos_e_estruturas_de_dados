export default class Deque {
	constructor() {
		this._tail = 0;
		this._head = 0;
		this._itens = {};
	}
	
	addFront(elmt) {
		if (this.isEmpty()) {
			this.addBack(elmt);
		} else if (this._head > 0) {
			this._head--;
			this._itens[this._head] = elmt;
		} else {
			for (let i = this._tail; i > 0; i--) {
				this._itens[i] = this._itens[i - 1];
			}
			
			this._itens[0] = elmt;
			this._tail++;
			this._head = 0;
		}
	}
	
	addBack(elmt) {
		this._itens[this._tail] = elmt;
		this._tail++;
	}
	
	removeFront() {
		if (this.isEmpty()) return undefined;
		
		let item = this._itens[this._head];
		delete this._itens[this._head];
		this._head++;
		
		return item;
	}
	
	removeBack() {
		if (this.isEmpty()) return undefined;
		
		this._tail--;
		let item = this._itens[this._tail];
		delete this._itens[this._tail];
		
		return item;
	}
	
	peekFront() {
		if (this.isEmpty()) return undefined;
		
		return this._itens[this._head];
	}
	
	peekBack() {
		if (this.isEmpty()) return undefined;
		
		return this._itens[this._tail - 1];
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