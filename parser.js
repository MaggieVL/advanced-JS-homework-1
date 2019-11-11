const fs = require('file-system');

class Parser {

    static getVertices(filename) {
        const graph = JSON.parse(fs.readFileSync(filename, { encoding: 'utf-8' }));
        return Object.keys(graph);
    }   

    static getEdges(filename) {
        return JSON.parse(fs.readFileSync(filename, { encoding: 'utf-8' }));
    }
}

module.exports = Parser;