// src/utils/generateMaze.js

/**
 * Generates a perfect maze using Recursive Backtracking.
 * @param {number} width - Maze width (must be odd for proper walls).
 * @param {number} height - Maze height (must be odd for proper walls).
 * @returns {number[][]} - 2D array representing the maze (0 = path, 1 = wall).
 */
export function generateMaze(width, height) {
  if (width % 2 === 0) width += 1; // Ensure odd dimensions
  if (height % 2 === 0) height += 1;

  const maze = Array.from({ length: height }, () => Array(width).fill(1)); // Fill with walls

  function carve(x, y) {
    maze[y][x] = 0; // Make this cell a path
    const directions = shuffle([
      [0, -2], // Up
      [0, 2],  // Down
      [-2, 0], // Left
      [2, 0]   // Right
    ]);

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx > 0 && ny > 0 && nx < width - 1 && ny < height - 1 && maze[ny][nx] === 1) {
        maze[y + dy / 2][x + dx / 2] = 0; // Carve path between cells
        carve(nx, ny);
      }
    }
  }

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  carve(1, 1); // Start carving from (1,1)

  // Define start and end points
  maze[1][1] = 0; // Start
  maze[height - 2][width - 2] = 0; // End

  return maze;
}
