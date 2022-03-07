import {defaultCompare, swap} from "../util.js";

export default class MinHeap {
	constructor(compareFunction = defaultCompare) {
		this._heap = [];
		this.compare = compareFunction;
	}
	
	getLeftIndex(i) {
		return 2 * i + 1;
	}
	
	getRightIndex(i) {
		return 2 * i + 2;
	}
	
	getParentIndex(i) {
		return Math.floor((i - 1) / 2);
	}
	
	insert(value) {
		this._heap.push(value);
		this._siftUp(this.size() - 1);
		return true;
	}
	
	extract() {
		if (this.isEmpty()) return undefined;
		
		if (this.size() === 1) {
			return this._heap.shift();
		}
		
		let removed = this._heap.shift();
		this._siftDown(0);
		return removed;
	}
	
	size() {
		return this._heap.length;
	}
	
	isEmpty() {
		return this.size() === 0;
	}
	
	findMinimum() {
		return this.isEmpty() ? undefined : this._heap[0];
	}
	
	_siftUp(i) {
		let parent = this.getParentIndex(i);
		
		while(i > 0 && this.compare(this._heap[parent], this._heap[i]) == 1) {
			swap(this._heap, parent, i);
			i = parent;
			parent = this.getParentIndex(i);
		}
	}
	
	_siftDown(i) {
		let element = i;
		let left = this.getLeftIndex(i);
		let right = this.getRightIndex(i);
		let size = this.size();
		
		if (left < size && this.compare(this._heap[element], this._heap[left]) == 1) {
			element = left;
		}
		
		if (right < size && this.compare(this._heap[element], this._heap[right]) == 1) {
			element = right;
		}
		
		if (i !== element) {
			swap(this._heap, i, element);
			this._siftDown(element);
		}
	}
}