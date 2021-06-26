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
// and we make our way to the center (the new leaf) -> peeling the graph like an 

const n = 4;
const undirectedEdges = [
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
undirectedEdges.forEach((edge) => addEdge(...edge));

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
  let leaves = new Array();
  // adding nodes with one neighbor to the leaves array
  // n is the number of nodes
  for (let i = 0; i < n; i++) {
    if (adjacencyList.get(i).length === 1) {
      leaves.push(i)
    }
  }

  // keep removing leaves until there is at most two nodes left
  let x = n;
  while (x > 2) {
    x -= leaves.length
    console.log(x)

    // temp array for new leaves
    let newLeaves = new Array();

    // removing each of the current leaves
    for (let i of leaves) {
      // get this leaf's one and only neighbor
      let [j] = adjacencyList.get(i)
      console.log(i, j)

      // go to the leaf's neighbor and remove this leaf from its list
       let z = adjacencyList.get(j).findIndex(e => e === i)
      z = adjacencyList.get(j).splice(z, 1)
      console.log(z)
      console.log(adjacencyList.get(j))

      // if that neighbor only has one neighbor left (indegree = 1), then it's a leaf now
      if (adjacencyList.get(j).length === 1) {
        newLeaves.push(j)
      }
    }

    // once the current leaves are removed, make the newLeaves the 'current' leaves
    leaves = newLeaves
  }

  return leaves;
}

console.log(minimumHeightTree(adjacencyList))

