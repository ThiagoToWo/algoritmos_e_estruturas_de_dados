import CircularLinkedList from '/src/eds/circularlinkedlist.js';

const c = new CircularLinkedList();

console.log('Acrescentar 1, 2 e 3 com push(elmt).');
c.push(1);
c.push(2);
c.push(3);
console.log('A lista é', c.toString());
console.log('A cabeça da lista é', c.getHead());
let t = c.getElementAt(c.size() - 1);
console.log('A último elemento da lista é', t);
console.log('Removendo o elemento na posição 1 com removeAt(index).');
c.removeAt(1);
console.log('A lista é', c.toString());
console.log('A cabeça da lista é', c.getHead());
t = c.getElementAt(c.size() - 1);
console.log('A último elemento da lista é', t);
//
console.log('Inserindo o elemento X na posição 1 com insert(elmt, index).');
c.insert('X', 1);
console.log('A lista é', c.toString());
console.log('A cabeça da lista é', c.getHead());
t = c.getElementAt(c.size() - 1);
console.log('A último elemento da lista é', t);
//
console.log('Inserindo o elemento Y na posição 2 com insert(elmt, index).');
c.insert('Y', 2);
console.log('A lista é', c.toString());
console.log('A cabeça da lista é', c.getHead());
t = c.getElementAt(c.size() - 1);
console.log('A último elemento da lista é', t);
//
console.log('Inserindo o elemento Z na última posição com insert(elmt, index).');
c.insert('Z', c.size());
console.log('A lista é', c.toString());
console.log('A cabeça da lista é', c.getHead());
t = c.getElementAt(c.size() - 1);
console.log('A último elemento da lista é', t);
//
console.log('Inserindo o elemento W na posição 0 com insert(elmt, index).');
c.insert('W', 0);
console.log('A lista é', c.toString());
console.log('A cabeça da lista é', c.getHead());
t = c.getElementAt(c.size() - 1);
console.log('A último elemento da lista é', t);