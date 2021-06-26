'use strict';

// minimumHeightTree
// graph is guaranteed to have no cycles
  // the problem is: if you were to turn the graph into a tree
  // ... which node should be the root to yield the tree
  // ... with the minimum height (not necessarily a binary tree)

/**
 * 
 * two examples:
 *     1          0      3     2  
 *   / | \        |      |     |  
 *  0  2  3       1      1     1  
 *               / \    / \   / \ 
 *              2  3   2  0  3  0 
 * 
 * choosing (1) as the root would result in the shortest tree
 *              
 */

// the idea is start at the (leaves) of the graph -> a node with one neighbor
// and we make our way to the center

const n = 4;
const directedEdges = [
  [0, 1],
  [1, 2],
  [1, 3],
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

  // visited[node] = group;

  // const neighbors = adjacencyList.get(node)

  // // console.log(neighbors) // 1, 2, 4, 3, (2)

  // for (const neighbor of neighbors) {
  //   // non-bipartite
  //   if (visited[neighbor] === group) {
  //     return false;
  //   }
  //   // if unvisited neighbor, dfs it and assign it to the other group
  //   if (visited[neighbor] === undefined && !dfs(neighbor, visited, -group)) {
  //     // if non-bipartite
  //     return false;
  //   }
  // }

  // // if no problems in dfs, then we good
  // return true;
}

// Main Function
function minimumHeightTree(adjacencyList) {
  // const visited = new Array();

  // for (let i = 0; i < adjacencyList.size; i++) {
  //   if (visited[i] === undefined && !dfs(i, visited, 1)) {
  //     // non-bipartite
  //     return false;
  //   }    
  // }

  // // bipartite
  // return true;
}

console.log(minimumHeightTree(adjacencyList))

