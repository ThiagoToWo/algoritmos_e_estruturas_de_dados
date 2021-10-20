import HashMap from '/src/eds/hashmap.js';

const h = new HashMap();

function log(...str) {
	console.log(...str);
}

h.put('Thiago', 24981701997);
h.put('João', 3299825636);
h.put('Tereza', 2467879808);
log('O valor de Thiago é', h.get('Thiago'));
log('O valor de João é', h.get('João'));
log('O valor de Tereza é', h.get('Tereza'));
log('Removendo Tereza', h.remove('Tereza'));