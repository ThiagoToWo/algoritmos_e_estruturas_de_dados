function defaultEquals(a, b) {
	return a === b;
}

class Node {
	constructor(elt) {
		this.element = elt;
		this.nextNode = undefined;
	}
}

export default class LinkedList {
	constructor(equalsFuntion = defaultEquals) {
		this._n = 0;
		this._head = undefined;
		this._equals = equalsFuntion;
	}
	
	push(elt) {
		const node = new Node(elt);		
		
		if (this.isEmpty()) {
			this._head = node;
		} else {
			let current = this._head;
			
			while (current.nextNode != null) {
				current = current.nextNode;
			}
			
			current.nextNode = node;
		}
		
		this._n++;
	}
	
	insert(elt, index) {
		if (index >= 0 && index <= this.size()) {
			let node = new Node(elt);
			
			if (index === 0) {				
				node.nextNode = this._head;
				this._head = node;
			} else {
				let previous = this.getElementAt(index - 1);
				let current = previous.nextNode;
				node.nextNode = current;
				previous.nextNode = node;
			}
			
			this._n++;
			
			return true;
		}
		
		return false;
	}
	
	getElementAt(index) {
		if (index >=0 && index < this.size()) {
			let current = this._head;
			
			for (let i = 0; i < index; i++) {
				current = current.nextNode;
			}
			
			return current;
		}
		
		return undefined;
	}
	
	remove(elt) {
		let index = this.indexOf(elt);
		this.removeAt(index);
	}
	
	removeAt(index) {
		if (index >= 0 && index < this.size()) {
			let current = this._head;
			
			if (index === 0) {
				this._head = current.nextNode;
			} else {
				let previous = this.getElementAt(index - 1);				
				current = previous.nextNode;
				previous.nextNode = current.nextNode;				
			}
			this._n--;
				
			return current.element;
		}
		
		return undefined;
	}
	
	indexOf(elt) {
		let current = this._head;
		
		for (let i = 0; i < this.size(); i++) {
			if (this._equals(elt, current.element)) {
				return i;
			}
			
			current = current.nextNode;
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
			current = current.nextNode;
		}
		
		return str;
	}
}