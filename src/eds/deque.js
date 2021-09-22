export default class Deque {
	constructor() {
		this._tail = 0;
		this._nose = 0;
		this._itens = {};
	}
	
	addFront(elt) {
		if (this.isEmpty()) {
			this.addBack(elt);
		} else if (this._nose > 0) {
			this._nose--;
			this._itens[this._nose] = elt;
		} else {
			for (let i = this._tail; i > 0; i--) {
				this._itens[i] = this._itens[i - 1];
			}
			
			this._itens[0] = elt;
			this._tail++;
			this._nose = 0;
		}
	}
	
	addBack(elt) {
		this._itens[this._tail] = elt;
		this._tail++;
	}
	
	removeFront() {
		if (this.isEmpty()) return undefined;
		
		let item = this._itens[this._nose];
		delete this._itens[this._nose];
		this._nose++;
		
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
		
		return this._itens[this._nose];
	}
	
	peekBack() {
		if (this.isEmpty()) return undefined;
		
		return this._itens[this._tail - 1];
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