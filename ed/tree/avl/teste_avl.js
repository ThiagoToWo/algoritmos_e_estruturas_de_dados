import AVLTree from './avl.js';

const a = new AVLTree();

const log = (...str) =>	console.log(...str);

function print() {
	log('imprimindo em ordem');
	a.inOrder(log);
	log('imprimindo em pré-ordem');
	a.preOrder(log);
	log('imprimindo em pós-ordem');
	a.postOrder(log);	
}

log('inserindo os elementos 10, 11, 12, 13, 14, 15, 16, 17 e 18');
a.insert(10);
a.insert(11);
a.insert(12);
a.insert(13);
a.insert(14);
a.insert(15);
a.insert(16);
a.insert(17);
a.insert(18);
//
log('o valor mínimo', a.min().key);
log('o valor máximo', a.max().key);
print();
//
log('inserindo os elementos 1, 2, 3, 4 e 5');
a.insert(1);
a.insert(2);
a.insert(3);
a.insert(4);
a.insert(5);
print();
//
log('remove o 1');
a.remove(1);
print();
//
log('remove o 11');
a.remove(11);
print()
//
log('remove o 14');
a.remove(14);
print()
log('remove o 18');
a.remove(18);
print()