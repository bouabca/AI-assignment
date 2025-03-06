// Predefined Weighted Maze (for UCS, Dijkstra, A*)

// 0: Free path, 1: Wall, numbers from 2 upwards represent the cost of the path
export const maze = [
  [0, 1, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 2, 0, 3, 1, 1, 0],
  [0, 0, 0, 1, 0, 1, 4, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 5, 0, 1, 0],
  [0, 2, 1, 0, 0, 1, 6, 0, 1, 0],
  [0, 1, 1, 1, 1, 2, 7, 1, 1, 0],
  [0, 3, 0, 0, 0, 0, 8, 0, 0, 0],
  [0, 1, 2, 1, 1, 1, 9, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 10, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 11, 1, 1, 0],
];

export const numRows = maze.length;
export const numCols = maze[0].length;
export const start = [0, 0];
export const goal = [numRows - 1, numCols - 1];
