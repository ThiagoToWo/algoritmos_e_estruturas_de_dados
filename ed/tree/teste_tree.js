import Tree from './tree.js';

const t = new Tree();

const log = (...str) =>	console.log(...str);

function print() {
	log('imprimindo em ordem');
	t.inOrder(log);
	log('imprimindo em pré-ordem');
	t.preOrder(log);
	log('imprimindo em pós-ordem');
	t.postOrder(log);	
}

log('inserindo os elementos 92, 12, 93, 1, 17, 15, 41, 29, 49, 74 e 73');
t.insert(92);
t.insert(12);
t.insert(93);
t.insert(1);
t.insert(17);
t.insert(15);
t.insert(41);
t.insert(29);
t.insert(49);
t.insert(74);
t.insert(73);
//
log('o valor mínimo', t.min().key);
log('o valor máximo', t.max().key);
print();
//
log('inserindo os elementos 6, 4 e 9');
t.insert(6);
t.insert(4);
t.insert(9);
print();
//
log('remove o 15 (folha)');
t.remove(15);
print();
//
log('remove o 74 (apenas um filho)');
t.remove(74);
print()
//
log('remove o 17 (dois filhos)');
t.remove(17);
print()