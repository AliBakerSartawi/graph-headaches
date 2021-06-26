'use strict';

// isCyclic (courseSchedule) algorithm detects cycles in graphs

/**
 * we need to detect nodes visited more than once in the current traversal
 *
 * flags:
 * 0/undefined = unvisited
 * 1 = visited (past)
 * -1 = visiting (current)
 * 
 * below example should yield a cyclic graph:
 * 0 -> 1 -> 2 -> 4 -> 3 -> (2) this is where the cycle happens
 * 
 */

const n = 5;
const directedEdges = [
  [0, 1],
  [1, 2],
  [3, 2],
  [4, 3],
  [2, 4]
];

const adjacencyList = new Map();

function addNode(n) {
  adjacencyList.set(n, []);
}

function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
}

// populating graph
for (let i = 0; i < n; i++) {
  addNode(i);
}
directedEdges.forEach((edge) => addEdge(...edge));

console.log(adjacencyList);

// DFS
function dfs(node, visited) {

  if (visited[node] === -1) {
    // cyclic
    return true;
  }

  if (visited[node] === 1) {
    // acyclic
    return false;
  }

  // marking currently visited as -1
  visited[node] = -1;

  const neighbors = adjacencyList.get(node)

  console.log(neighbors) // 1, 2, 4, 3, (2)

  for (const neighbor of neighbors) {
    if (dfs(neighbor, visited)) {
      return true;
    }
  }

  visited[node] = 1;
  return false;
}

// Main Function
function isCyclic(adjacencyList) {
  const visited = new Array();

  for (let i = 0; i < adjacencyList.size; i++) {
    if (dfs(i, visited)) {
      // cyclic graph
      return true;
    }    
  }

  // acyclic graph
  return false;
}

console.log(isCyclic(adjacencyList))

