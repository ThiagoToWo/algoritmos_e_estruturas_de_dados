import {heapSort} from './heapsort.js';

// funções úteis
function gerarNumAleatorios(n) {
	let x;
	let array = [];
	for (let i = 0; i < n; i++) {
		x = 1 + Math.floor(Math.random() * 100);
		array.push(x);
	}
	return array;
}

function contarTempo(sortName, sortFunction, array) {
	let t0 = new Date().getTime();
	sortFunction(array);
	let t = new Date().getTime();	
	console.log("Depois do ", sortName, ":", array);
	console.log("Tempo de execução do", sortName, ":", t - t0, "milissegundos");
}

// testes
const array = gerarNumAleatorios(100);

console.log("Antes do heapsort:", array);
contarTempo('heapsort', heapSort, array);
