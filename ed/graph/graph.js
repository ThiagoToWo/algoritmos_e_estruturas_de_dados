export default class Graph {
    constructor(isDirect = false) {
        this.isDirect = isDirect;
        this.vertices = [];
        this.adjList = {};
    }

    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList[v] = [];
        }
    }

    addEdge(v, w) {
        if (!this.adjList[v]) {
            this.addVertex(v);
        }
        
        if (!this.adjList[w]) {
            this.addVertex(w);
        }

        this.adjList[v].push(w);

        if (!this.isDirect) {
            this.adjList[w].push(v);
        }
    }

    getVertices() {
        return this.vertices;
    }

    getAdjList() {
        return this.adjList;
    }

    toString() {
        let s = '';

        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} -> `;
            const neighbors = this.adjList[this.vertices[i]];

            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `;
            }

            s += `\n`
        }

        return s;
    }
}