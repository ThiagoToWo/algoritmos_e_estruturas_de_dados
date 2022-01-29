//Funções úteis.
export function defaultEquals(a, b) {
	return a === b;
}

export function defaultCompare(a, b) {
	if (a === b) return 0;
	else if (a > b) return 1;
	else return -1;
}

export function defaultToString(elmt) {
	if (elmt === null) {
		return 'NULL';
	} else if (elmt === undefined) {
		return 'UNDEFINED';
	} else if (typeof elmt === 'string' || elmt instanceof String) {
		return elmt;
	} else if (typeof elmt === 'boolean' || elmt instanceof Boolean) {
		return String(elmt);
	}
	
	return elmt.toString();
}

//Classes úteis.
export class ListNode {
	constructor(elmt) {
		this.element = elmt;
		this.next = undefined;
	}
}

export class DoublyNode extends ListNode {
	constructor(elmt) {
		super(elmt);
		this.prev = undefined;
	}
}

export class TreeNode {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
		this.height = 0;
	}
}

export class Pair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
}