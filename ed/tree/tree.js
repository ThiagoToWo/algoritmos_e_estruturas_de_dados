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
		
	}
	
	max() {
		
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
	
	_inO(node, callback) {
		if (node == null) return;
		this._inO(node.left);
		callback(node); // in
		this._inO(node.right);
	}
	
	_prO(node, callback) {
		if (node == null) return;
		callback(node); // pre
		this._prO(node.left);
		this._prO(node.right);
	}
	
	_poO(node, callback) {
		if (node == null) return;
		this._poO(node.left);
		this._poO(node.right);
		callback(node);	// post
	}
}