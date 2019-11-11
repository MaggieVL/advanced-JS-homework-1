const PriorityQueue = require('./priority-queue');

class Graph {
    constructor(edges, vertices) {
        this.edges = edges;
        this.vertices = vertices;
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }

    addEdge(startVertex, endVertex, weight) {
        this.edges[startVertex].push({ vertex: endVertex, weight: weight});
    }

    dijkstra(startVertex, endVertex) {
        let currentSum = {};
        let parent = {};
        let heap = new PriorityQueue();

        currentSum[startVertex] = 0;
  
        this.vertices.forEach(vertex => {
          if (vertex !== startVertex) {
            currentSum[vertex] = Infinity;
          }
        });

        heap.enqueue(startVertex);

        while (!heap.isEmpty()) {
            let currentVertex = heap.dequeue();
            this.edges[currentVertex].forEach(neighbor => {
              let sum = currentSum[currentVertex] + neighbor.weight;

              if (sum < currentSum[neighbor.vertex]) {
                currentSum[neighbor.vertex] = sum;
                parent[neighbor.vertex] = currentVertex;
                heap.enqueue(neighbor.vertex);
              }
            });
          }

        let path = [endVertex];
        let lastStep = endVertex;
        while(lastStep !== startVertex) {
            path.unshift(parent[lastStep]);
            lastStep = parent[lastStep];
        }
        
        return path;
    }
}

module.exports = Graph;