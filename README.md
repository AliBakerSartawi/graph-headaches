# graph-headaches

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

- [possiblePartition](./possibleBipartition.js)

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
