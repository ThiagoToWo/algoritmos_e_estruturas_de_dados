import {defaultCompare, swap} from "../../util.js";
import MinHeap from "./minheap.js";

export default class MaxHeap extends MinHeap {
	constructor(compareFunction = defaultCompare) {
		super(compareFunction);
		this.compare = function(a, b) {
			return compareFunction(b, a);
		}
	}
	
	findMaximum() {
		return this.isEmpty() ? undefined : this._heap[0];
	}
}