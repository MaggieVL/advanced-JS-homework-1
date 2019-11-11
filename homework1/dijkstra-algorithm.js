const Parser = require('./parser.js');
const Graph = require('./graph.js');

function main() {
    const edges = Parser.getEdges('./graph.txt');
    const vertices = Parser.getVertices('./graph.txt');

    const graph = new Graph(edges, vertices);
    const path = graph.dijkstra('A', 'G');
    console.log(path);
}

main();