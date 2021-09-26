export function defaultEquals(a, b) {
	return a === b;
}

export class Node {
	constructor(elmt) {
		this.element = elmt;
		this.next = undefined;
	}
}

export class LinkedList {
	constructor(equalsFuntion = defaultEquals) {
		this._n = 0;
		this._head = undefined;
		this._equals = equalsFuntion;
	}
	
	push(elmt) {
		const node = new Node(elmt);		
		
		if (this.isEmpty()) {
			this._head = node;
		} else {
			let current = this._head;
			
			while (current.next != null) {
				current = current.next;
			}
			
			current.next = node;
		}
		
		this._n++;
	}
	
	insert(elmt, indx) {
		if (indx >= 0 && indx <= this.size()) {
			const node = new Node(elmt);
			
			if (indx === 0) {				
				node.next = this._head;
				this._head = node;
			} else {
				let previous = this.getElementAt(indx - 1);
				let current = previous.next;
				node.next = current;
				previous.next = node;
			}
			
			this._n++;
			
			return true;
		}
		
		return false;
	}
	
	getElementAt(indx) {
		if (indx >=0 && indx < this.size()) {
			let current = this._head;
			
			for (let i = 0; i < indx; i++) {
				current = current.next;
			}
			
			return current;
		}
		
		return undefined;
	}
	
	remove(elmt) {
		let indx = this.indexOf(elmt);
		this.removeAt(indx);
	}
	
	removeAt(indx) {
		if (indx >= 0 && indx < this.size()) {
			let current = this._head;
			
			if (indx === 0) {
				this._head = current.next;
			} else {
				let previous = this.getElementAt(indx - 1);				
				current = previous.next;
				previous.next = current.next;				
			}
			this._n--;
				
			return current.element;
		}
		
		return undefined;
	}
	
	indexOf(elmt) {
		let current = this._head;
		
		for (let i = 0; i < this.size(); i++) {
			if (this._equals(elmt, current.element)) {
				return i;
			}
			
			current = current.next;
		}
		
		return -1;
	}
	
	isEmpty() {
		return this.size() === 0;
	}
	
	size() {
		return this._n;
	}
	
	getHead() {
		return this._head;
	}
	
	toString() {
		let str = '';
		let current = this._head;
				
		for (let i = 0; i < this.size(); i++) {
			str += current.element + ' ';
			current = current.next;
		}
		
		return str;
	}
}