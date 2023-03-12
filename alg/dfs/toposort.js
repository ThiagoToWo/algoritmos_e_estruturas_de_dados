import Graph from '../../ed/graph/graph.js';
import {DFS} from './dfs.js';

const dagGraph = new Graph(true);

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < myVertices.length; i++) {
    dagGraph.addVertex(myVertices[i]);
}

dagGraph.addEdge('A', 'C');
dagGraph.addEdge('A', 'D');
dagGraph.addEdge('B', 'D');
dagGraph.addEdge('B', 'E');
dagGraph.addEdge('C', 'F');
dagGraph.addEdge('F', 'E');

const result = DFS(dagGraph);
const fTimes = result.finished;
let s = '';
console.log(result);

for (let count = 0; count < myVertices.length; count++) {
    let max = 0;
    let maxName = null;

    for (let i = 0; i < myVertices.length; i++) {
        if (fTimes[myVertices[i]] > max) {
            max = fTimes[myVertices[i]];
            maxName = myVertices[i];
        }
    }

    s += " - " + maxName;
    delete fTimes[maxName];
}

console.log(s);