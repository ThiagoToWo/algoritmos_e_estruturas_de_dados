import {breadthFirstSearch, BFS} from "./bfs.js";
import Graph from '../../ed/graph/graph.js';
import Stack from '../../ed/stack/stack.js';

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

function print(value) {
    console.log('Vértices visitados: ' + value);
}

breadthFirstSearch(graph, myVertices[0], print);

const shortestPathA = BFS(graph, myVertices[0]);

console.log(shortestPathA);

const formVertex = myVertices[0];

for (let i = 1; i < myVertices.length; i++) {
    const toVertex = myVertices[i];
    const path = new Stack();

    for (let v = toVertex; v !== formVertex; v = shortestPathA.predecessors[v]) {
        path.push(v);
    }

    path.push(formVertex);
    
    let s = path.pop();

    while (!path.isEmpty()) {
        s += ` - ${path.pop()}`;
    }

    console.log(s);
}
