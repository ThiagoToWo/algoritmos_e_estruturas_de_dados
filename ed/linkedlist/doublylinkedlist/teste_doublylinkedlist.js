import DoublyLinkedList from './doublylinkedlist.js';

console.log('Criando uma DoublyLinkedList com equalsFunction padrão.');
const d = new DoublyLinkedList();
console.log('A lista está vazia?', d.isEmpty());
//push
console.log('Adicionando os elementos A, B e C na lista com push(elmt).')
d.push('A');
d.push('B');
d.push('C');
console.log('A lista é', d.toString());
console.log('A lista está vazia?', d.isEmpty());
console.log('O tamanho da lista é', d.size());
console.log('A cabeça da lista é', d.getHead());
console.log('A calda da lista é', d.getTail());
//getElementAt
console.log('Descobrindo o elemento na posição 1 com getElementAt(index).');
console.log('O elemento na posição 1 é:', d.getElementAt(1));
//insert
console.log('Adicionando um elemento D na posição 1 (2o elemento) com insert(elmt, index).');
d.insert('D', 1);
console.log('A lista é', d.toString());
console.log('O tamanho da lista é', d.size());
console.log('A cabeça da lista é', d.getHead());
console.log('A calda da lista é', d.getTail());
console.log('O elemento na posição 1 é:', d.getElementAt(1));
console.log('Adicionando um elemento X na posição 0 e um no fim com insert(elmt, 0) e insert(elmt, d.size()).');
d.insert('X', 0);
d.insert('X', d.size());
console.log('A lista é', d.toString());
console.log('O tamanho da lista é', d.size());
console.log('A cabeça da lista é', d.getHead());
console.log('A calda da lista é', d.getTail());
//remove
console.log('Removendo o elemento C pelo remove(elmt).');
d.remove('C');
console.log('A lista é', d.toString());
console.log('O tamanho da lista é', d.size());
console.log('A cabeça da lista é', d.getHead());
console.log('A calda da lista é', d.getTail());
//removeAt
console.log('Removendo o elemento da posição 3 com removeAt(index).');
console.log('O elemento removido da posição 3 é', d.removeAt(3));
console.log('A lista é', d.toString());
console.log('O tamanho da lista é', d.size());
console.log('A cabeça da lista é', d.getHead());
console.log('A calda da lista é', d.getTail());
console.log('Removendo o último elemento da lista com removeAt(d.size() - 1).');
console.log('O elemento removido é', d.removeAt(d.size() - 1));
console.log('A lista é', d.toString());
console.log('O tamanho da lista é', d.size());
console.log('A cabeça da lista é', d.getHead());
console.log('A calda da lista é', d.getTail());
console.log('Removendo o elemento da posição 0 com removeAt(index).');
console.log('O elemento removido da posição 0 é', d.removeAt(0));
console.log('A lista é', d.toString());
console.log('O tamanho da lista é', d.size());
console.log('A cabeça da lista é', d.getHead());
console.log('A calda da lista é', d.getTail());
console.log('Removendo o elemento da posição 0 com removeAt(index).');
console.log('O elemento removido da posição 0 é', d.removeAt(0));
console.log('A lista é', d.toString());
console.log('O tamanho da lista é', d.size());
console.log('A cabeça da lista é', d.getHead());
console.log('A calda da lista é', d.getTail());
console.log('Removendo o elemento da posição 0 com removeAt(index).');
console.log('O elemento removido da posição 0 é', d.removeAt(0));
console.log('A lista é', d.toString());
console.log('O tamanho da lista é', d.size());
console.log('A cabeça da lista é', d.getHead());
console.log('A calda da lista é', d.getTail());