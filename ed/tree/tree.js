import {TreeNode, defaultCompare} from '../util.js';

export default class Tree {
	constructor(compareFuntion = defaultCompare) {
		this._n = 0;
		this._root = null;
		this.compare = compareFuntion;
	}
	
	insert(key) {
		if (this._root == null) {
			this._root = new TreeNode(key);
		} else {
			this._insertNode(this._root, key);
		}
	}
	
	search(key) {
		this._searchNode(this._root);
	}
	
	inOrder(callback) {
		this._inO(this._root, callback);
	}
	
	preOrder(callback) {
		this._prO(this._root, callback);
	}
	
	postOrder(callback) {
		this._poO(this._root, callback);
	}
	
	min() {
		let current = (this._root != null) ? this._root : undefined;
		
		while (current.left != null) {
			current = current.left;
		}
		
		return current.key;
	}
	
	max() {
		let current = (this._root != null) ? this._root : undefined;
		
		while (current.right != null) {
			current = current.right;
		}
		
		return current.key;
	}
	
	remove(key) {
		
	}
	
	// Métodos internos.
	_insertNode(node, key) {
		if (this.compare(key, node.key) === -1) {
			if (node.left == null) {
				node.left = new TreeNode(key);
			} else {
				this._insertNode(node.left, key);
			}
		} else {
			if (node.right == null) {
				node.right = new TreeNode(key);
			} else {
				this._insertNode(node.right, key);
			}
		}
	}
	
	_searchNode(node) {
		if (node == null) return false;
		
		if (this.compare(key, node.key) === 0) { // igual
			return true;
		} else if (this.compare(key, node.key) === -1) { // menor
			this._searchNode(node.left);
		} else { // maior
			this._searchNode(node.right);
		}
	}
	
	_inO(node, callback) {
		if (node == null) return;
		this._inO(node.left, callback);
		callback(node.key); // in
		this._inO(node.right, callback);
	}
	
	_prO(node, callback) {
		if (node == null) return;
		callback(node.key); // pre
		this._prO(node.left, callback);
		this._prO(node.right, callback);
	}
	
	_poO(node, callback) {
		if (node == null) return;
		this._poO(node.left, callback);
		this._poO(node.right, callback);
		callback(node.key);	// post
	}
}