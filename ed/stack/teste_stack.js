//main_stack.js
import Stack from './stack.js';

const s = new Stack();

console.log('está vazio? ', s.isEmpty());
console.log('Acrescentando os números 2, 3 e 1.');
s.push(2);
s.push(3);
s.push(1);
console.log('está vazio? ', s.isEmpty());
console.log('tamanho = ', s.size());
console.log('o último elemento é ', s.peek());
console.log('Retirando o número 1 com pop().');
s.pop();
console.log('o último elemento é ', s.peek());
console.log('tamanho = ', s.size());
s.clear();
console.log('está vazio? ', s.isEmpty());