'use strict';

// bipartition determines of the graph can be split into two groups
// ... where a node has a color (value) different than its neighbors
// similar to graph coloring

/**
 * 
 * flags:
 * 0 = unvisited
 * 1 = group A
 * -1 = group B
 * 
 * below example should yield true:
 *              2(A)
 *            /     \
 * 0(A) -> 1(B)     4(B)
 *            \     /
 *              3(A)
 */

const n = 5;
const directedEdges = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
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

  // if (visited[node] === -1) {
  //   // cyclic
  //   return true;
  // }

  // if (visited[node] === 1) {
  //   // acyclic
  //   return false;
  // }

  // // marking currently visited as -1
  // visited[node] = -1;

  // const neighbors = adjacencyList.get(node)

  // console.log(neighbors) // 1, 2, 4, 3, (2)

  // for (const neighbor of neighbors) {
  //   if (dfs(neighbor, visited)) {
  //     return true;
  //   }
  // }

  // visited[node] = 1;
  // return false;
}

// Main Function
function possibleBipartition(adjacencyList) {
  // const visited = new Array();

  // for (let i = 0; i < adjacencyList.size; i++) {
  //   if (dfs(i, visited)) {
  //     // cyclic graph
  //     return true;
  //   }    
  // }

  // // acyclic graph
  // return false;
}

console.log(possibleBipartition(adjacencyList))

