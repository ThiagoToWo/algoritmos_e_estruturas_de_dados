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

export function DFS(graph) {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const d = {};
    const f = {};
    const p = {};
    const time = {count: 0};

    for (let i = 0; i < vertices.length; i++) {
        d[vertices[i]] = 0;
        f[vertices[i]] = 0;
        p[vertices[i]] = null;
    }

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            DFSVisit(vertices[i], color, d, f, p, time, adjList);
        }
    }

    return {
        discovery: d,
        finished: f,
        predecessors: p
    };
}

function DFSVisit(u, color, d, f, p, time, adjList) {
    color[u] = Colors.GREY;
    d[u] = ++time.count;
    const nb = adjList[u];

    for (let i = 0; i < nb.length; i++) {
        const w = nb[i];

        if (color[w] === Colors.WHITE) {
            p[w] = u;
            DFSVisit(w, color, d, f, p, time, adjList);
        }
    }

    color[u] = Colors.BLACK;
    f[u] = ++time.count;
}