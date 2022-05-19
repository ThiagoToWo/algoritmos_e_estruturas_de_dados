import {TreeNode, defaultCompare} from '../../util.js';

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
		return this._searchNode(this._root, key);
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
		return this._minNode(this._root);		
	}
	
	max() {
		return this._maxNode(this._root);
	}
	
	remove(key) {
		this._root = this._removeNode(this._root, key);
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
	
	_searchNode(node, key) {
		if (node == null) return false;
		
		if (this.compare(key, node.key) === 0) { // igual
			return true;
		} else if (this.compare(key, node.key) === -1) { // menor
			return this._searchNode(node.left);
		} else { // maior
			return this._searchNode(node.right);
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
	
	_minNode(node) {
		let current = (node != null) ? node : undefined;
		
		while (current.left != null) {
			current = current.left;
		}
		
		return current;
	}
	
	_maxNode(node) {
		let current = (node != null) ? node : undefined;
		
		while (current.right != null) {
			current = current.right;
		}
		
		return current;
	}
	_removeNode(node, key) {
		if (node == null) return null;
		
		if (this.compare(key, node.key) === -1) {
			node.left = this._removeNode(node.left, key);			
		} else if (this.compare(key, node.key) === 1) {
			node.right = this._removeNode(node.right, key);			
		} else {
			// não tem filhos
			if (node.left == null && node.right == null) {
				node = null;
			} else if (node.left == null) { // falta um dos filhos
				node = node.right;
			} else if (node.right == null) {
				node = node.left;
			} else { // tem os dois filhos
				const successor = this._minNode(node.right);
				node.key = successor.key;
				node.right = this._removeNode(node.right, successor.key);
			}				
		}
		
		return node;
	};
}