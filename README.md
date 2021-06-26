# graph-headaches

## classless solutions

- [connectedComponents](./connectedComponents.js)

  ```js
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
  ```

- [isCyclic-courseSchedule](./isCyclic-courseSchedule.js)

  ```js
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
  ```

- [possibleBipartition](./possibleBipartition.js)

  ```js
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
  ```

- [minimumHeightTree](./minimumHeightTree.js)

  ```js
  // minimumHeightTree
  // graph is guaranteed to have no cycles
  // the problem is: if you were to turn the graph into a tree
  // ... which node should be the root to yield the tree
  // ... with the minimum height (not necessarily a binary tree)

  /**
   *
   * examples:
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
  ```

- [airports-bfs-dfs](./airports-bfs-dfs.js)

  ```js
  // real life case for bfs & dfs exercise
  ```
