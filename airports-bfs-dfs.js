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