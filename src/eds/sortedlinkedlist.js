import {defaultEquals, LinkedList} from './linkedlist.js';

function defaultCompare(a, b) {
	if (a === b) return 0;
	else if (a > b) return 1;
	else return -1;
}

export default class SortedLinkedList extends LinkedList {
	constructor(equalsFunction = defaultEquals, compareFunction = defaultCompare) {
		super(equalsFunction);
		this.compare = compareFunction;
	}
	
	insert(elmt, index = 0) {
		if (this.isEmpty()) {
			super.insert(elmt, 0);
		} else {
			let iob = this._indexOfBigger(elmt);
			super.insert(elmt, iob);
		}
	}
	
	_indexOfBigger(elmt) {
		let current = this._head;
		let i = 0;
		
		for (; i < this.size(); i++) {
			if (this.compare(elmt, current.element) === -1) {
				return i;
			}
			
			current = current.next;
		}
		
		return i;
	}
}