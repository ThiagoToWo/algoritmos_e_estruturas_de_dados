import {defaultCompare, swap} from '../../util.js';

export function heapSort(array, compareFunction = defaultCompare) {
	let size = array.length;
	buildMaxHeap(array, compareFunction);
	while(size > 1) {
		swap(array, 0, --size);
		heapfy(array, 0, size, compareFunction);
	}
	return array;
}

function heapfy(array, i, size, compareFunction) {
	let element = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	
	if (left < size && compareFunction(array[element], array[left]) === -1) {
		element = left;
	}
	
	if (right < size && compareFunction(array[element], array[right]) === -1) {
		element = right;
	}
	
	if (element != i) {
		swap(array, element, i);
		heapfy(array, element, size, compareFunction);
	}
}

function buildMaxHeap(array, compareFunction) {
	let size = array.length;
	
	for (let i = Math.floor(size / 2); i >= 0; i--) {
		heapfy(array, i, size, compareFunction);
	}
}