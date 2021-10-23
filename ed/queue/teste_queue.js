import Queue from './queue.js';

const q = new Queue();

console.log('Está vazio?', q.isEmpty());
console.log('Incluindo A e B.');
q.enqueue('A');
q.enqueue('B');
console.log('Está vazio?', q.isEmpty());
console.log('O tamanho é:', q.size());
console.log('O primeiro elemento é', q.peek());
console.log('Incluindo C.');
q.enqueue('C');
console.log('O tamanho é:', q.size());
console.log('O primeiro elemento é', q.peek());
console.log('Tirando A e B com dequeue()');
q.dequeue();
q.dequeue();
console.log('O tamanho é:', q.size());
console.log('O primeiro elemento é', q.peek());