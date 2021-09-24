import {defaultEquals, Node} from './linkedlist.js';

class DoublyNode extends Node {
	constructor(elmt) {
		super(elmt);
		this.prev = undefined;
	}
}

export default class DoublyLinkedList {
	constructor(equalsFuntion = defaultEquals) {
		this._n = 0;
		this._head = undefined;
		this._tail = undefined;
		this._equals = equalsFuntion;
	}
		
	insert(elmt, index) {
		if (index >= 0 && index <= this.size()) {
			const node = new DoublyNode(elmt);
			let current = this._head;
			
			if (index === 0) {
				if (this.isEmpty()) {
					this._head = node;
					this._tail = node;
				} else {
					node.next = current;
					current.prev = node;
					this._head = node;
				}
			} else if (index === this.size()) {
				current = this._tail;
				current.next = node;
				node.prev = current;				
				this._tail = node;
			} else {
				let previous = this.getElementAt(index - 1);
				current = previous.next;
				node.next = current;
				current.prev = node;
				node.prev = previous;
				previous.next = node;
			}
			
			this._n++;
			
			return true;
		}
		
		return false;
	}
	
	removeAt(index) {
		if (index >= 0 && index < this.size()) {
			let current = this._head;
			
			if (index === 0) {
				this._head = current.next;
				current.prev = undefined;
				
				if (this.size() === 1) {
					this._tail = undefined
				}
			} else if (index === this.size() -1) {
				current = this._tail;
				let previous = current.prev;
				this._tail = previous;
				previous.next = undefined;
			} else {
				current = this.getElementAt(index);
				let previous = current.prev;
				previous.next = current.next;
				current.next.prev = previous;
			}
			
			this._n--;
			
			return current.element;
		}
		
		return undefined;
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
	
	isEmpty() {
		return this.size() === 0;
	}
	
	size() {
		return this._n;
	}
	
	getHead() {
		return this._head;
	}
	
	getTail() {
		return this._tail;
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