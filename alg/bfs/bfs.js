import Queue from '../../ed/queue/queue.js';
import {Colors, initializeColor} from '../../util.js'

export function breadthFirstSearch(graph, startVertex, callback) {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    
    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const nb = adjList[u];
        color[u] = Colors.GREY;

        for (let i = 0; i < nb.length; i++) {
            const w = nb[i];
            
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                queue.enqueue(w);
            } 
        }

        color[u] = Colors.BLACK;

        if (callback) {
            callback(u);
        }
    }
}