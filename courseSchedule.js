'use strict';

// courseSchedule algorithm detects cycles in graphs

/**
 * we need to detect nodes visited more than once in the current traversal
 *
 * flags:
 * 0 = unvisited
 * 1 = visited (past)
 * -1 = visiting (current)
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
}

// Main Function
function isCyclic(adjacencyList) {
  const visited = new Array(adjacencyList.size);

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

