import SortedLinkedList from './sortedlinkedlist.js';

const s = new SortedLinkedList();

console.log('Inserindo os elementos t, h, i, a, g, o nessa ordem, com insert(elmt)');
s.insert('t');
s.insert('h');
s.insert('i');
s.insert('a');
s.insert('g');
s.insert('o');
console.log('A lista é', s.toString());
console.log('Inserindo os elementos 9, 8, 1, 7, 0, 1, 9, 9, 7 nessa ordem, com insert(elmt)');
s.insert(9);
s.insert(8);
s.insert(1);
s.insert(7);
s.insert(0);
s.insert(1);
s.insert(9);
s.insert(9);
s.insert(7);
console.log('A lista é', s.toString());