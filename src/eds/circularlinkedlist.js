import {defaultEquals, Node, LinkedList} from './linkedlist.js';

export default class CircularLinkedList extends LinkedList {
	constructor(equalsFunction = defaultEquals) {
		super(equalsFunction);
	}
	
	push(elmt) {
		/*let node = new Node(elmt);
		
		if (this.isEmpty()) {			
			this._head = node;			
		} else {
			let last = this.getElementAt(this.size() - 1);
			last.next = node;
		}
		
		node.next = this._head;	
		this._n++;*/
		
		this.insert(elmt, this.size());
	}
	
	insert(elmt, index) {		
		if (index >= 0 && index <= this.size()) {
			const node = new Node(elmt);			
			let current = this._head;
			
			if (index === 0) {
				if (this.isEmpty()) {
					this._head = node;
					node.next = this._head;
				} else {
					node.next = this._head;
					current = this.getElementAt(this.size() - 1);
					current.next = node;
					this._head = node;
				}
			} else {
				let previous = this.getElementAt(index - 1);
				current = previous.next;
				node.next = current;
				previous.next = node;
			}
			
			this._n++;
		
			return true
		} 
		
		return false;		
	}
	
	removeAt(index) {
		if (index >=0 && index < this.size()) {
			let current = this._head;
			
			if (index === 0) {
				if (this.size() == 1) {
					this._head = undefined;
				} else {
					let last = this.getElementAt(this.size() - 1);
					last.next = current.next;
					this._head = current.next;
				}
			} else {
				let previous = this.getElementAt(index - 1);
				current = previous.next;
				previous.next = current.next;
			}
			
			this._n--
			
			return current.element;
		}
		
		return undefined;
	}
}