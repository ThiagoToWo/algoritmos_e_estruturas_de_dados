import {TreeNode, defaultCompare} from '/ed/util.js';
import Tree from '../tree.js';

export default class AVLTree extends Tree {
	constructor(compareFunction = defaultCompare) {
		super(compareFunction);
		this._root = null;	
	}
	
	getNodeHeight(node) {
		if (node == null) {
			return -1;
		}
		
		return Math.max(
			this.getNodeHeight(node.left), 
			this.getNodeHeight(node.right)
		) + 1;
	}
	
	getBalanceFactor(node) {
		/*		
		* Desbalanceado para direita = -2
		* Desbalanceado levemente para direita = -1
		* Balanceado = 0;
		* Desbalanceado levemente para esquerda = 1
		* Desbalanceado para esquerda = 2
		*/
		return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
	}
	
	/**
    * Caso esquerda-esquerda: rotação a direita
    *
    *       50                            30
    *      /  \                          /  \
    *     30  70 -> rotatieRigth(50) -> 10  50
    *    /  \                          /   /  \
    *   10  40                        5   40  70
    *  /
	* 5
    **/
	rotateRight(node) {
		let aux = node.left;
		node.left = aux.right;
		aux.right = node;
		return aux;
	}
	
	/**
    * Caso direita-direita: rotação a esquerda
    *
    *     50                            70
    *    /  \                          /  \
    *   30  70   -> rotateLeft(50) -> 50  80
    *      /  \                      /  \   \
    *     60  80                    30  60  90
    *           \
	*           90
    **/
	rotateLeft(node) {
		let aux = node.right;
		node.right = aux.left;
		aux.left = node;
		return aux;
	}
	
	insert(key) { // versão com retorno do nó inserido
		this._root = this._insertNode(this._root, key);
	}
	
	remove(key) {
		this._root = this._removeNode(this._root, key);
	}
	
	// sobrescreve a versão da classe superior para uma que retorne o nó inserido
	_insertNode(node, key) { 
		if (node == null) {
			return new TreeNode(key);
		} else if (this.compare(key, node.key) === -1) {
			node.left = this._insertNode(node.left, key);
		} else if (this.compare(key, node.key) === 1) {
			node.right = this._insertNode(node.right, key);
		} else {
			return node;
		}
		
		return this._rebalance(node);
	}
	
	_removeNode(node, key) {
		node = super._removeNode(node, key);
		
		if (node == null) return node;
		
		return this._rebalance(node);
	}
	
	_rebalance(node) {
		let balanceFactor = this.getBalanceFactor(node);		
		// nó desbalanceado a direita
		if (balanceFactor < -1) { 
			// filho direito desbalanceado a esquerda?
			if (this.getBalanceFactor(node.right) > 0) { 
				// rotaciona este filho pra direita
				node.right = this.rotateRight(node.right);
			}			
			// rotaciona o pai para esquerda
			return this.rotateLeft(node);
		} else if (balanceFactor > 1) { // nó desbalanceado a esquerda
			// filho esquerdo desbalanceado a direita?
			if (this.getBalanceFactor(node.left) < 0) {
				// rotaciona este filho pra esquerda
				node.left = this.rotateLeft(node.left);
			}
			// rotaciona o pai para direita
			return this.rotateRight(node);			
		} else {
			return node;
		}		
	}
}