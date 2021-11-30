import Tree from './tree.js';

const t = new Tree();

const log = (...str) =>	console.log(...str);

log('inserindo os elementos 11, 5 e 7');
t.insert(11);
t.insert(5);
t.insert(7);
log('o valor mínimo', t.min());
log('o valor máximo', t.max());
log('imprimindo em ordem');
t.inOrder(log);
log('imprimindo em pré-ordem');
t.preOrder(log);
log('imprimindo em pós-ordem');
t.postOrder(log);