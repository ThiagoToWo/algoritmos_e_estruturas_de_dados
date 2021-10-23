import Set from './set.js';

const set = new Set();

console.log('Adicionando o elemento 1 com add(elmt)');
set.add(1);
console.log('Os elemento em set são', set.values());
console.log('1 pertence a set?', set.has(1));
console.log('O tamanho de set é', set.size());
//
console.log('Adicionando o elemento 2 com add(elmt)');
set.add(2);
console.log('Os elemento em set são', set.values());
console.log('2 pertence a set?', set.has(2));
console.log('O tamanho de set é', set.size());
//
console.log('Adicionando os elementos 1, 2 e 3 com add(elmt)');
set.add(1);
set.add(2);
set.add(3);
console.log('Os elemento em set são', set.values());
console.log('3 pertence a set?', set.has(3));
console.log('O tamanho de set é', set.size());
//
console.log('Removendo o elemento 2 com remove(elmt)');
set.remove(2);
console.log('Os elemento em set são', set.values());
console.log('2 pertence a set?', set.has(2));
console.log('O tamanho de set é', set.size());
//
console.log('Criando os conjuntos set1 = {1,2,3,4} e set2 = {3,4,5,6}.');
const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);
const set2 = new Set();
set2.add(3);
set2.add(4);
set2.add(5);
set2.add(6);
console.log('O conjunto set é', set.values());
console.log('O conjunto set1 é', set1.values());
console.log('O conjunto set2 é', set2.values());
console.log('set é subconjunto de set1?', set.isSubsetOf(set1));
console.log('set1 é subconjunto de set2?', set1.isSubsetOf(set2));
console.log('A união de set1 e set2 é', set1.union(set2).values());
console.log('A interseção de set1 e set2 é', set1.intersection(set2).values());
console.log('A a diferença set1 e set2 é', set1.difference(set2).values());
console.log('A a diferença set2 e set1 é', set2.difference(set1).values());