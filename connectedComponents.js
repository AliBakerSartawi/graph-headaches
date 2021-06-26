'use strict';

/**
 * given n nodes labeled from 0 to n-1
 * and a list of undirected edges (each edge is a pair of nodes).
 * write a function to find the number of connected components in an
 * undirected graph
 *
 * n = 5
 * [[0,1], [1,2], [2,0], [3,4]]
 *
 * draw graph:
 *    1      4
 *  /  \    /
 * 0---2   3
 *
 * we discover there are multiple clusters/islands of nodes
 * each one of those is a connected component
 */

const n = 5;
const undirectedEdges = [
  [0, 1],
  [1, 2],
  [2, 0],
  [3, 4]
];

const adjacencyList = new Map();

function addNode(n) {
    adjacencyList.set(n, [])
}

function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// populating graph
for (let i = 0; i < n; i++) {
  addNode(i)
}
undirectedEdges.forEach(edge => addEdge(...edge))

console.log(adjacencyList)

// DFS
function dfs(node, visited) {
  visited.add(node);

  const neighbors = adjacencyList.get(node)

  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, visited)
    }
  }
}

// Main Function
function connectedComponents(adjacencyList) {
  let counter = 0;
  const visited = new Set();

  for (let i = 0; i < adjacencyList.size; i++) {
    if (!visited.has(i)) {
      // increase the counter each time dfs is called
      counter++;
      dfs(i, visited)
    }
    
  }
  return counter
}

let keys = adjacencyList.keys()
for (let key of keys) {
  console.log(key)
}

console.log(connectedComponents(adjacencyList))