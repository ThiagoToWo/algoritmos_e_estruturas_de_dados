import HashMap from './hashmap.js';

const h = new HashMap();

function log(...str) {
	console.log(...str);
}

function logHash(key) {
	log(key, 'hash ->',h.toHashCode(key));
}

function logValue(key) {
	log('O valor de ' + key + ' é', h.get(key));
}

function logSize(obj) {
	log('O tamanho do HashMap é', obj.size());
}

h.put('Thiago', 24981701997);
h.put('João', 3299825636);
h.put('Tereza', 2467879808);
h.put(497, 'p');
h.put(undefined, 34);
h.put(true, 'verdade');

logHash('Thiago');
logHash('João');
logHash('Tereza');
logHash(497);
logHash(undefined);

logSize(h);

logValue('Thiago');
logValue('João');
logValue('Tereza');
logValue(497);
logValue(undefined);
logValue(true);

log('Removendo Tereza', h.remove('Tereza'));

logSize(h);