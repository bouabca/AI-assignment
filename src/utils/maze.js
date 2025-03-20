// Predefined unweighted Maze
export const maze = [
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
];

export const numRows = maze.length;
export const numCols = maze[0].length;
export const start = [0, 0];
export const goal = [numRows - 1, numCols - 1];

// In src/utils/maze.js
export function generateRandomMaze(rows, cols) {
  // Ensure rows and cols are odd numbers for proper maze generation
  if (rows % 2 === 0) rows++;
  if (cols % 2 === 0) cols++;
  
  const maze = Array.from({ length: rows }, () => Array(cols).fill(1));
  
  function carve(r, c) {
    maze[r][c] = 0;
    const directions = [
      [-2, 0], [2, 0], [0, -2], [0, 2]
    ].sort(() => Math.random() - 0.5);
    
    for (const [dr, dc] of directions) {
      const nr = r + dr, nc = c + dc;
      if (nr > 0 && nr < rows - 1 && nc > 0 && nc < cols - 1 && maze[nr][nc] === 1) {
        maze[r + dr / 2][c + dc / 2] = 0; // remove wall between
        carve(nr, nc);
      }
    }
  }

  // Start carving from a random odd cell
  const startRow = Math.floor(Math.random() * (rows / 2)) * 2 + 1;
  const startCol = Math.floor(Math.random() * (cols / 2)) * 2 + 1;
  carve(startRow, startCol);
  
  // Set start and goal explicitly if needed
  maze[1][1] = 0;
  maze[rows - 2][cols - 2] = 0;
  return maze;
}
