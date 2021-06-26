'use strict';

// isBipartite (possiblePartition) determines of the graph can be split into two groups
// ... where a node has a color (value) different than its neighbors
// similar to graph coloring

/**
 * 
 * flags:
 * 0/undefined = unvisited
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
  adjacencyList.get(destination).push(origin);
}

// populating graph
for (let i = 0; i < n; i++) {
  addNode(i);
}
directedEdges.forEach((edge) => addEdge(...edge));

console.log(adjacencyList);

// DFS
function dfs(node, visited, group) {

  visited[node] = group;

  const neighbors = adjacencyList.get(node)

  // console.log(neighbors) // 1, 2, 4, 3, (2)

  for (const neighbor of neighbors) {
    // non-bipartite
    if (visited[neighbor] === group) {
      return false;
    }
    // if unvisited neighbor, dfs it and assign it to the other group
    if (visited[neighbor] === undefined && !dfs(neighbor, visited, -group)) {
      // if non-bipartite
      return false;
    }
  }

  // if no problems in dfs, then we good
  return true;
}

// Main Function
function possibleBipartition(adjacencyList) {
  const visited = new Array();

  for (let i = 0; i < adjacencyList.size; i++) {
    if (visited[i] === undefined && !dfs(i, visited, 1)) {
      // non-bipartite
      return false;
    }    
  }

  // bipartite
  return true;
}

console.log(possibleBipartition(adjacencyList))

