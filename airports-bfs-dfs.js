'use strict';

/**
 * Classless example
 */

// Vertices
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

// Edges
const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
  adjacencyList.set(airport, [])
}

// Add edge, undirected, weightless
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination)
  adjacencyList.get(destination).push(origin)
}

// Creating the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route)) // equal to (route[0], route[1])

console.log(adjacencyList)

// ---------------------------------------

/**
 * Breadth-first search
 */

// We need to chose a node to start traversing,
// ... we'll choose the first one, PHX (phoenix)

// We take the first node, and visit all it's children,
// then do the same with it's children, until we have a collection
// ... of all nodes, or until we find the target node 

function bfs(start, target) {

  // to prevent an infinite loop
  const visited = new Set();

  const queue = [start]

  while (queue.length) {
    const airport = queue.shift()

    // grab all the edges
    const destinations = adjacencyList.get(airport)

    console.log(airport);

    for (const destination of destinations) {
      
      if (destination === target) {
        console.log(airport, 'found', destination)
      }
      
      if (!visited.has(destination)) {
        visited.add(destination);
        // only adds to the queue if not visited before
        queue.push(destination);
      }
    }
  }
}

// this will take more steps to find the target node
// ... but is efficient in finding all the possible 
bfs('PHX', 'BKK')

// ---------------------------------------

/**
 * Breadth-first search
 */

// This will find an edge (route) as fast as possible

// instead of traversing each child of a node,
// we traverse the first child, then the first child of that and so on

function dfs(start, target, visited = new Set()) {

  console.log(start)

  visited.add(start)

  const destinations = adjacencyList.get(start)

  for (const destination of destinations) {

    if (destination === target) {
      console.log(start, 'found', target);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, target, visited)
    }
  }
}

dfs('PHX', 'BKK')