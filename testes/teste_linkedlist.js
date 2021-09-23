import LinkedList from '/src/eds/linkedlist.js';

console.log('Criando uma linkedlist com equalsFunction padrão.');
const l = new LinkedList();
console.log('A lista está vazia?', l.isEmpty());
console.log('Adicionando os elementos A, B e C na lista com push(elt).')
l.push('A');
l.push('B');
l.push('C');
console.log('A lista é', l.toString());
console.log('A lista está vazia?', l.isEmpty());
console.log('O tamanho da lista é', l.size());
console.log('A cabeça da lista é', l.getHead());
console.log('Descobrindo o elemento na posição 1 com getElementAt(index).');
console.log('O elemento na posição 1 é:', l.getElementAt(1));
console.log('Adicionando um elemento D na posição 1 (2o elemento) com insert(elt, index).');
l.insert('D', 1);
console.log('A lista é', l.toString());
console.log('O tamanho da lista é', l.size());
console.log('A cabeça da lista é', l.getHead());
console.log('O elemento na posição 1 é:', l.getElementAt(1));
console.log('Adicionando um elemento X na posição 0 e um no fim com insert(elt, 0) e insert(elt, l.size()).');
l.insert('X', 0);
l.insert('X', l.size());
console.log('A lista é', l.toString());
console.log('O tamanho da lista é', l.size());
console.log('A cabeça da lista é', l.getHead());
console.log('Encontrando a posição do elemento C com indexOf(elt).');
console.log('A posição do elemento C é', l.indexOf('C'));
console.log('Removendo o elemento C com remove(elt).')
l.remove('C');
console.log('A lista é', l.toString());
console.log('O tamanho da lista é', l.size());
console.log('Encontrando a posição do elemento C com indexOf(elt).');
console.log('A posição do elemento C é', l.indexOf('C'), ', pois foi retirado.');
console.log('Removendo o elemento da posição 3 com removeAt(index).');
console.log('O elemento removido da posição 3 é', l.removeAt(3));
console.log('A lista é', l.toString());
console.log('O tamanho da lista é', l.size());
