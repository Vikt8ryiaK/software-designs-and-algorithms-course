interface IWeightedGraph<T> {
    addVertex(key: string): void;
    addEdge(vertex1: T, vertex2: T, weight: number): void;
}

class Vertex {
    constructor(public key: string) {
        this.key = key;
    }
}

class Edge {
    constructor(public from: Vertex, public to: Vertex, public weight: number) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

const vertices = [
    new Vertex('1'),
    new Vertex('2'),
    new Vertex('3'),
    new Vertex('4'),
    new Vertex('5')
];

const vertex1 = vertices[0];
const vertex2 = vertices[1];
const vertex3 = vertices[2];
const vertex4 = vertices[3];
const vertex5 = vertices[4];

const edges = [
    new Edge(vertex1, vertex4, 3),
    new Edge(vertex1, vertex2, 5),
    new Edge(vertex1, vertex3, 4),
    new Edge(vertex2, vertex4, 6),
    new Edge(vertex2, vertex3, 5),
];

class WeightedGraph implements IWeightedGraph<Vertex> {
    public nodes: string[];
    public adjacencyList: Record<string, {node: string; weight: number}[]>;

    constructor() {
        this.nodes = [];
        this.adjacencyList = {};
    }

    addVertex(key: string): void {
        this.nodes.push(key); 
        if(!this.adjacencyList[key]) this.adjacencyList[key] = [];
    }

    addEdge(vertex1: Vertex, vertex2: Vertex, weight: number): void {
        this.adjacencyList[vertex1.key].push({ node: vertex2.key, weight });
        this.adjacencyList[vertex2.key].push({ node: vertex1.key, weight });
    }
}

const graph: WeightedGraph = new WeightedGraph();

vertices.forEach(verticle => graph.addVertex(verticle.key));
edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));

interface Path {
    path: string[];
    distance: number;
}

interface IDijkstra<T> {
    findShortestPath(vertex1: T, vertex2: T): Path;
    findAllShortestPaths(vertex: T): Record<string, Path>;
}

class PriorityQueue {
    public collection: [string, number][];

    constructor() {
      this.collection = [];
    }

    enqueue(element: [string, number]){
        if (this.isEmpty()){ 
          this.collection.push(element);
        } else {
          let added = false;
          for (let i = 1; i <= this.collection.length; i++){
            if (element[1] < this.collection[i-1][1]){ 
              this.collection.splice(i-1, 0, element);
              added = true;
              break;
            }
          }
          if (!added){
              this.collection.push(element);
          }
        }
    }

    dequeue() {
        let value = this.collection.shift();
        return value;
    }

    isEmpty() {
        return (this.collection.length === 0) 
    }
}

class Dijkstra implements IDijkstra<Vertex> {
    constructor(private graph: WeightedGraph) {
        this.graph = graph;
    }

    public findShortestPath(vertex1: Vertex, vertex2: Vertex): Path {
        let distances: Record<string,number> = {};
        let backtrace: Record<string,string> = {};
        let priorityQueue = new PriorityQueue();

        distances[vertex1.key] = 0;

        this.graph.nodes.forEach(node => {
          if (node !== vertex1.key) {
            distances[node] = Infinity
          }
        });

        priorityQueue.enqueue([vertex1.key, 0]);

        while (!priorityQueue.isEmpty()) {
            let shortestStep = priorityQueue.dequeue();
            let currentNode = shortestStep?.[0] || '';
            this.graph.adjacencyList[currentNode].forEach(current => {
                let distance = distances[currentNode] + current.weight;
                if (distance < distances[current.node]) {
                    distances[current.node] = distance;
                    backtrace[current.node] = currentNode;
                    priorityQueue.enqueue([current.node, distance]);
                }
            });
        }

        let lastStep = vertex2.key;
        const isFinite = Number.isFinite(distances[vertex2.key]);
        let path = isFinite ? [vertex2.key] : [];

        while(lastStep !== vertex1.key && lastStep in backtrace) {
            path.unshift(backtrace[lastStep])
            lastStep = backtrace[lastStep]
        }

        return { path, distance: distances[vertex2.key] };
    }

    public findAllShortestPaths(vertex: Vertex): Record<string, Path> {
        const nodes = Object.keys(this.graph.adjacencyList)
            .filter((key: string) => key !== vertex.key)

        const paths: Record<string, Path> = {};  
        for(let node of nodes) {
            paths[node] = this.findShortestPath(vertex, new Vertex(node));
        }

        return paths;
    }
}

const dijkstra = new Dijkstra(graph);

dijkstra.findShortestPath(vertex4, vertex3);
dijkstra.findShortestPath(vertex1, vertex5);
dijkstra.findShortestPath(vertex1, vertex1);

dijkstra.findAllShortestPaths(vertex4);

