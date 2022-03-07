import MinHeap from "./minheap.js";
import MaxHeap from "./maxheap.js";

const mih = new MinHeap();
console.log('Criando um MinHeap e inserindo os valores 2, 9, 3, 4, 5 e 1');
mih.insert(2);
mih.insert(9);
mih.insert(3);
mih.insert(4);
mih.insert(5);
mih.insert(1);

console.log('Tamanho do heap:', mih.size());
console.log('O heap está vazio?', mih.isEmpty());
console.log('O menor valor é', mih.findMinimum());
console.log('Extrair o mínimo:', mih.extract());
console.log('O menor valor é', mih.findMinimum());
console.log('Extrair o mínimo:', mih.extract());
console.log('O menor valor é', mih.findMinimum());

const mah = new MaxHeap();
console.log('Criando um MaxHeap e inserindo os valores 2, 9, 3, 4, 5 e 1');
mah.insert(2);
mah.insert(9);
mah.insert(3);
mah.insert(4);
mah.insert(5);
mah.insert(1);

console.log('Tamanho do heap:', mah.size());
console.log('O heap está vazio?', mah.isEmpty());
console.log('O maior valor é', mah.findMaximum());
console.log('Extrair o máximo:', mah.extract());
console.log('O maior valor é', mah.findMaximum());
console.log('Extrair o máximo:', mah.extract());
console.log('O maior valor é', mah.findMaximum());