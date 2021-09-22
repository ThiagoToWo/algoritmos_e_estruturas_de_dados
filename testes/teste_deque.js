import Deque from '/src/eds/deque.js';

const d = new Deque();

console.log('Está vazio?', d.isEmpty());
console.log('Incluindo A e B.');
d.addBack('A');
d.addBack('B');
console.log('Está vazio?', d.isEmpty());
console.log('O tamanho é:', d.size());
console.log('O primeiro elemento é', d.peekFront());
console.log('O último elemento é', d.peekBack());
console.log('Incluindo C.');
d.addBack('C');
console.log('O tamanho é:', d.size());
console.log('O primeiro elemento é', d.peekFront());
console.log('O último elemento é', d.peekBack());
console.log('Tirando A com removeFront()');
d.removeFront();
console.log('O tamanho é:', d.size());
console.log('O primeiro elemento é', d.peekFront());
console.log('O último elemento é', d.peekBack());
console.log('Tirando C com removeBack()');
d.removeBack();
console.log('O tamanho é:', d.size());
console.log('O primeiro elemento é', d.peekFront());
console.log('O último elemento é', d.peekBack());