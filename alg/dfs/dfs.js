import {initializeColor, Colors} from "../../util.js";

export function depthFirstSearch(graph, callback) {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[i], color, adjList, callback);
        }
    }
}

function depthFirstSearchVisit(u, color, adjList, callback) {
    color[u] = Colors.GREY;

    if (callback) {
        callback(u);
    }

    const nb = adjList[u];

    for (let i = 0; i < nb.length; i++) {
        const w = nb[i];

        if (color[w] === Colors.WHITE) {
            depthFirstSearchVisit(w, color, adjList, callback);
        }
    }

    color[u] = Colors.BLACK;
}